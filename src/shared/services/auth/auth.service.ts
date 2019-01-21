import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { LoginService } from "../../../services/login-service";
import { HttpService } from "../http/http.service";
import { LoadingService } from "../../../services/loading-service";
import { App } from 'ionic-angular';

@Injectable()
export class AuthService {

    private isLoggedIn = false;

    constructor(
        public loginService: LoginService,
        public http:HttpService,
        public loadingService: LoadingService,
        private app: App
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
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('expires_date');
        this.app.getRootNavs()[0].setRoot("Login");
    }

    // Returns whether the user is currently authenticated
    // Could check if current token is still valid
    authenticated() : Observable<boolean> | Promise<boolean> | boolean {
        return this.isLoggedIn;
    }

    canActivate(){
        if(localStorage.getItem('access_token') == null || localStorage.getItem('access_token') == ''){
            this.logout();
        }else{
            if(localStorage.getItem('expires_date') == null || localStorage.getItem('expires_date') == ''){
                this.logout();
            }else{
                const now = new Date(localStorage.getItem(''));
                const expiresDate = new Date('expires_date');
                const tokenStillValid = (now < expiresDate);

                if(!tokenStillValid){
                    if(localStorage.getItem('refresh_token') == null || localStorage.getItem('refresh_token') == ''){
                        this.logout();
                    }else{
                        let params = {
                            "grant_type":"refresh_token",
                            "client_id":"1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4",
                            "client_secret":"4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
                            "refresh_token": localStorage.getItem('refresh_token')
                        };

                        this.http.post('oauth/v2/token', params).subscribe(
                            (response) => {
                                localStorage.setItem('access_token', response.access_token);
                                localStorage.setItem('refresh_token', response.refresh_token);
                                localStorage.setItem('expires_date', this.calculateTokenExpiresDateTime(response.expires_in).toString());
                            },
                            (error) => {

                                this.logout();
                            }
                        );
                    }
                }
            }
        }
    }

    calculateTokenExpiresDateTime(expires_in) {
        let now = new Date();
        let expiresDate = new Date(now.getTime() + expires_in*1000);

        return expiresDate;
    }
}
