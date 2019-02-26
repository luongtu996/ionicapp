import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, Select, NavParams } from 'ionic-angular';
import { LoadingService } from "../../services/loading-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TemplateService } from "../../services/template.service";
import { AuthService } from "../../shared/services/auth/auth.service";
import { LoginService } from "../../services/login-service";
import { CompanyService } from "../../services/company.service";
import { SmsService } from "../../services/sms.service";
import { ToastService } from "../../services/toast-service";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [AuthService]

})
export class HomePage implements OnInit{

    data: any = {};

    public form: FormGroup;
    public templates:any[];
    public template:any;
    public companies:any[];
    public company:any;

    @ViewChild('selectCompanies') selectModalCompanies: Select;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public fb: FormBuilder,
        private loadingService: LoadingService,
        public templateService:TemplateService,
        public authService:AuthService,
        public loginService: LoginService,
        public companyService:CompanyService,
        public smsService:SmsService,
        public toast: ToastService,
    ) {
        this.form = fb.group({
            'name': ['', Validators.required],
            'to': ['', [Validators.required, Validators.minLength(14)]],
        });
    }

    ionViewWillEnter () {
        this.authService.canActivate();
    }

    ngOnInit(){
    }

    onSubmit(formValue: any) {
        this.loadingService.show();
        formValue.to = formValue.to.replace(/\D+/g, '');
        formValue.to = "+1" + formValue.to;
        this.smsService.create(formValue).subscribe((response) => {
            this.loadingService.hide();
            this.form.reset();
            this.toast.presentToast("Invite Sent");
        }, (error) => {
            this.toast.presentToast(error.error.error.message);
            if (formValue.to.includes("+1")) {
                formValue.to = formValue.to.substr(2);
            }
            this.loadingService.hide();
        });
    }
}
