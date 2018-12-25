import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, Select} from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { LoadingService } from "../../services/loading-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TemplateService } from "../../services/template.service";
import { AuthService } from "../../shared/services/auth/auth.service";
import { LoginService } from "../../services/login-service";
import { CompanyService } from "../../services/company.service";
import { SmsService } from "../../services/sms.service";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [HomeService, AuthService]

})
export class HomePage implements OnInit{

    data: any = {};
    isBuyButtonEnabled = false;

    public form: FormGroup;
    public templates:any[];
    public template:any;
    public companies:any[];
    public company:any;

    @ViewChild('selectCompanies') selectModalCompanies: Select;
    constructor(
        public navCtrl: NavController,
        public service: HomeService,
        public fb: FormBuilder,
        private loadingService: LoadingService,
        public templateService:TemplateService,
        public authService:AuthService,
        public loginService: LoginService,
        public companyService:CompanyService,
        public smsService:SmsService
    ) {
        service.load().subscribe(snapshot => {
            this.data = snapshot;
        });

        this.form = fb.group({
            'body': ['', Validators.required],
            'name': ['', Validators.required],
            'to': ['', [Validators.required, Validators.minLength(14)]],
            'company_id': [''],
        });
    }

    ionViewWillEnter () {
        this.authService.canActivate();
    }

    ngOnInit(){
        this.getCompanies();
    }

    getCompanies(){
        if(this.loadingService.loading.index == -1)
            this.loadingService.show();
        this.companyService.list().subscribe((response) => {
            this.companies = response.data.results;

            if(this.companies.length != 0){
                this.company = this.companies[0];
                this.selectCompany(this.company);
            }
            if(this.loadingService.loading.index > -1)
                this.loadingService.hide();

            this.getTemplates();
        }, (error) => {
            if(this.loadingService.loading.index > -1)
                this.loadingService.hide();
            console.log(error);
        });
    }

    selectCompany(company:any){
        this.company = company;
    }

    getTemplates(){
        if(this.loadingService.loading.index == -1)
            this.loadingService.show();
        this.templateService.list().subscribe((response) => {
            if(this.loadingService.loading.index > -1)
                this.loadingService.hide();
            let templates = response.data.results;
            templates.forEach(item => {
                if(item.orden == 1)
                    this.form.controls['body'].setValue(item.body);
            });
        }, (error) => {
            console.log(error);
            if(this.loadingService.loading.index > -1)
                this.loadingService.hide();
        })
    }

    onSubmit(formValue: any) {
        if(this.loadingService.loading.index == -1)
            this.loadingService.show();

        formValue.to = formValue.to.replace(/\D+/g, '');
        formValue.company_id = this.company['id'];
        formValue.to = "+1" + formValue.to;
        this.smsService.create(formValue).subscribe((response) => {
            if(this.loadingService.loading.index > -1)
                this.loadingService.hide();
            this.form.reset();

            this.templates.forEach(item => {
                if(item.orden == 1)
                    this.form.controls['body'].setValue(item.body);
            });
        }, (error) => {
            if (formValue.to.includes("+1")) {
                formValue.to = formValue.to.substr(2);
            }
            if(this.loadingService.loading.index > -1)
                this.loadingService.hide();
            console.log(error);
        });
    }


    openListCompanies(){


        console.log(this.loadingService.loading.index);
        this.selectModalCompanies.open();
    }
}
