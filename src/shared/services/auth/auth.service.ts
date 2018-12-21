import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Storage } from "@ionic/storage";
import { LoginService } from "../../../services/login-service";
import { NavController } from "ionic-angular";
import { HttpService } from "../http/http.service";
import {LoadingService} from "../../../services/loading-service";

@Injectable()
export class AuthService {

    private isLoggedIn = false;

    constructor(
        public navCtrl: NavController,
        private storage: Storage,
        public loginService: LoginService,
        public http:HttpService,
        public loadingService: LoadingService,
    ) {
        this.isLoggedIn = true;
    }

    login() : void {
        this.isLoggedIn = true;
    }

    // Logout a user, destroy token and remove
    // every information related to a user
    logout() : void {
        this.isLoggedIn = false;

        this.navCtrl.push("Login", {
            service: this.loginService,
            page: {"title" : "Login Pages", "theme"  : "login",  "icon" : "icon-lock-open-outline", "listView" : false, "component":"Login", "singlePage":true},
            componentName: "Login"
        });
    }

    // Returns whether the user is currently authenticated
    // Could check if current token is still valid
    authenticated() : Observable<boolean> | Promise<boolean> | boolean {

        return this.isLoggedIn;
    }

    canActivate(){
        this.storage.ready().then(() => this.storage.get('access_token'))
            .then(token => {
                if(token == null || token == '') {
                    this.logout();
                }else{
                    this.storage.ready().then(() => this.storage.get('expires_date'))
                        .then(expires_date => {
                            const now = new Date();
                            const expiresDate = new Date(expires_date);
                            const tokenStillValid = (now < expiresDate);
                            if(!tokenStillValid){
                                this.storage.ready().then(() => this.storage.get('refresh_token'))
                                    .then(refresh => {
                                        if (refresh == null || refresh == '') {
                                            this.logout();
                                        } else {
                                            let params = {
                                                "grant_type":"refresh_token",
                                                "client_id":"1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4",
                                                "client_secret":"4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
                                                "refresh_token": refresh
                                            };
                                            // this.loadingService.show();
                                            this.http.post('oauth/v2/token', params).subscribe(
                                                (response) => {
                                                    this.loadingService.hide();
                                                    this.storage.set('access_token', response.access_token);
                                                    this.storage.set('refresh_token', response.refresh_token);
                                                    this.storage.set('expires_date', this.calculateTokenExpiresDateTime(response.expires_in).toString());
                                                },
                                                (error) => {
                                                    this.loadingService.hide();
                                                    this.logout();
                                                }
                                            );
                                        }
                                    })
                            }
                    })
                }
        });
    }

    calculateTokenExpiresDateTime(expires_in) {
        let now = new Date();
        let expiresDate = new Date(now.getTime() + expires_in*1000);

        return expiresDate;
    }
}
