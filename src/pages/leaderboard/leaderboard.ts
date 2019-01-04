import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonicPage, MenuController, Content,  NavController, NavParams, FabButton } from 'ionic-angular';
import { IService } from '../../services/IService';
import { HttpService } from "../../shared/services/http/http.service";
import { LoadingService } from "../../services/loading-service";
import { HomePage } from "../home/home";
import { DashboardService } from "../../services/dashboard.service";
import { ToastService } from "../../services/toast-service";
import { AuthService } from "../../shared/services/auth/auth.service";

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
        navParams: NavParams,
        private loadingService: LoadingService,
        public menu: MenuController,
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
        if(this.loadingService.loading.index == -1)
            this.loadingService.show();
        this.dashboardService.getStatsByLeaderboard().subscribe(
            (response) => {
                this.leaderboards = response.data;

                if(this.loadingService.loading.index > -1)
                    this.loadingService.hide();

                let self = this;
                for (let i = 0; i < this.leaderboards.length; i++) {
                    setTimeout(function () {
                        self.animateItems.push(self.leaderboards[i]);
                    }, 200 * i);
                }

            },(error) => {
                if(this.loadingService.loading.index > -1)
                    this.loadingService.hide();
                this.toast.presentToast(error.error.error.message);
                this.loadingService.hide();
                console.log(error);
            }
        );
    }


    changeDate(item){
        if(this.start && this.end){
            if(this.loadingService.loading.index == -1)
                this.loadingService.show();
            this.dashboardService.getStatsByLeaderboardByRange(this.start, this.end).subscribe(
                (response) => {

                    this.leaderboards = response.data;

                    let self = this;
                    self.animateItems = [];
                    for (let i = 0; i < this.leaderboards.length; i++) {
                        setTimeout(function () {
                            self.animateItems.push(self.leaderboards[i]);
                        }, 200 * i);
                    }

                    if(this.loadingService.loading.index > -1)
                        this.loadingService.hide();
                },(error) => {
                    this.toast.presentToast(error.error.error.message);
                    if(this.loadingService.loading.index > -1)
                        this.loadingService.hide();
                    console.log(error);
                }
            );
        }
    }
}
