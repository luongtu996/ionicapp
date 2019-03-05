import { Component, OnInit } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../../shared/services/http/http.service";
import { LoadingService } from "../../services/loading-service";
import { ToastService } from "../../services/toast-service";
import { UsuarioService } from "../../services/usuario.service";

@IonicPage()
@Component({
    templateUrl: 'login.html'
})
export class Login implements OnInit{
    public loginForm: FormGroup;

    constructor(
        protected http: HttpService,
        public navCtrl: NavController,
        public fb: FormBuilder,
        private loadingService: LoadingService,
        public menu: MenuController,
        public toast: ToastService,
        public usuarioServie:UsuarioService
    ) {
        this.loginForm = fb.group({
            'username': ['',[Validators.required]],
            'password': ['', Validators.required],
            'grant_type': ['password'],
            'client_id': ['1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4'],
            'client_secret': ['4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k'],
        });
    }

    ngOnInit(){
    }

    onSubmit(formValue: any) {
        this.loadingService.show();

        formValue.username = formValue.username.replace(/[()\-\ ]+/g,'');
        this.http.post('oauth/v2/token', formValue).subscribe(
            (response) => {
                localStorage.setItem('access_token', response.access_token);
                localStorage.setItem('refresh_token', response.refresh_token);
                localStorage.setItem('expires_date', this.calculateTokenExpiresDateTime(response.expires_in).toString());

                this.usuarioServie.getProfile().subscribe(
                    (response) => {
                        let usuario = response.data;
                        this.loadingService.hide();
                        this.navCtrl.setRoot("TabPage");
                    },(error) => {
                        this.loadingService.hide();
                        this.toast.presentToast(error.error.error.message);
                    }
                );


            },
            (error) => {
                this.toast.presentToast(error.error.error_description);
                this.loadingService.hide();

                if (formValue.username.includes("+1"))
                    formValue.username = formValue.username.substr(2);
            }
        );
    }

    calculateTokenExpiresDateTime(expires_in) {
        let now = new Date();
        let expiresDate = new Date(now.getTime() + expires_in*1000);

        return expiresDate;
    }
}
