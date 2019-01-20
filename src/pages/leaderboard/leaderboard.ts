import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { IService } from '../../services/IService';
import { HttpService } from "../../shared/services/http/http.service";
import { LoadingService } from "../../services/loading-service";
import { DashboardService } from "../../services/dashboard.service";
import { ToastService } from "../../services/toast-service";
import { AuthService } from "../../shared/services/auth/auth.service";
import {HomePage} from "../home/home";
import {Login} from "../login/login";
import {TabPage} from "../tab/tab";

@IonicPage()
@Component({
    templateUrl: 'leaderboard.html'
})
export class Leaderboard implements OnInit, AfterViewInit{

    page: any;
    service: IService;
    params: any = {};

    public start:any;
    public end:any;

    public animateItems = [];
    public leaderboards:any[];

    constructor(
        protected http: HttpService,
        // public authService:AuthService,
        public navCtrl: NavController,
        navParams: NavParams,
        private loadingService: LoadingService,
        public dashboardService:DashboardService,
        public toast: ToastService,
    ) {

    }

    ionViewWillEnter () {
        // this.authService.canActivate();
    }

    ngOnInit(){
        this.getLeaderboard();
    }

    ngAfterViewInit() {
    }

    getLeaderboard(){
        this.loadingService.show();

        this.dashboardService.getStatsByLeaderboard().subscribe(
            (response) => {
                this.leaderboards = response.data;

                this.loadingService.hide();

                let self = this;
                for (let i = 0; i < this.leaderboards.length; i++) {
                    setTimeout(function () {
                        self.animateItems.push(self.leaderboards[i]);
                    }, 200 * i);
                }

            },(error) => {
                this.loadingService.hide();
                this.toast.presentToast(error.error.error.message);
            }
        );
    }


    changeDate(item){
        if(this.start && this.end){
            this.loadingService.show();

            this.dashboardService.getStatsByLeaderboardByRange(this.start, this.end).subscribe(
                (response) => {
                    this.leaderboards = response.data;

                    this.loadingService.hide();

                    let self = this;
                    self.animateItems = [];
                    for (let i = 0; i < this.leaderboards.length; i++) {
                        setTimeout(function () {
                            self.animateItems.push(self.leaderboards[i]);
                        }, 200 * i);
                    }
                },(error) => {
                    this.toast.presentToast(error.error.error.message);
                    this.loadingService.hide();
                }
            );
        }
    }


    probando(){
        // this.navCtrl.setRoot(HomePage);
        this.navCtrl.setRoot(HomePage, { tabIndex: 0 });

        // this.tabRef.navCtrl.setRoot(HomePage);


        // select(1, { animate: false });

        // this.nav.setRoot(page.component, {tabIndex: 2});

    }
}
