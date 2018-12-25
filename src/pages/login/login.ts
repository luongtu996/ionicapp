import {Component, OnDestroy, OnInit} from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { IService } from '../../services/IService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../../shared/services/http/http.service";
import { LoadingService } from "../../services/loading-service";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
    templateUrl: 'login.html'
})
export class Login implements OnInit, OnDestroy{

    page: any;
    service: IService;
    params: any = {};

    public loginForm: FormGroup;

    constructor(
        protected http: HttpService,
        public navCtrl: NavController,
        navParams: NavParams,
        public fb: FormBuilder,
        private loadingService: LoadingService,
        public menu: MenuController,
    ) {
        // If we navigated to this page, we will have an item available as a nav param
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
            this.params.data = this.service.load(this.page);
        } else {
            navCtrl.setRoot("HomePage");
        }

        this.loginForm = fb.group({
            'username': ['heidy.resteasy@gmail.com',[Validators.required]],
            'password': ['REM4lif3', Validators.required],
            'domain': ['', Validators.required],
            'grant_type': ['password'],
            'client_id': ['1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4'],
            'client_secret': ['4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k'],
        });


    }

    ngOnInit(){
        // this.loginForm.controls.domain.setValue(localStorage.getItem('domain'));
        this.menu.enable(false);
    }

    ngOnDestroy(){
        this.menu.enable(true);
    }

    onSubmit(formValue: any) {
        // if(this.loadingService.loading.index == -1)
        //     this.loadingService.show();

        formValue.username = formValue.username.replace(/[()\-\ ]+/g,'');
        // if(!this.loadingService.loading)
        //     this.loadingService.show();
        this.http.post('oauth/v2/token', formValue).subscribe(
            (response) => {
                // if(this.loadingService.loading)
                //     this.loadingService.hide();

                // localStorage.setItem('access_token', response.access_token);
                // localStorage.setItem('refresh_token', response.refresh_token);
                // localStorage.setItem('domain', formValue.domain);
                // localStorage.setItem('expires_date', this.calculateTokenExpiresDateTime(response.expires_in).toString());

                if(this.loadingService.loading.index > -1)
                    this.loadingService.hide();

                this.navCtrl.setRoot("HomePage", {
                    page: {"title" : "Send A Review Invite", "theme"  : "home",  "icon" : "icon-lock-open-outline", "listView" : false, "component":"", "singlePage":false},
                    componentName: "Login"
                });

            },
            (error) => {
                if(this.loadingService.loading.index > -1)
                    this.loadingService.hide();
                if (formValue.username.includes("+1"))
                    formValue.username = formValue.username.substr(2);
                // if(this.loadingService.loading)
                //     this.loadingService.hide();
                console.log(error);
            }
        );
    }

    calculateTokenExpiresDateTime(expires_in) {
        let now = new Date();
        let expiresDate = new Date(now.getTime() + expires_in*1000);

        return expiresDate;
    }
}
