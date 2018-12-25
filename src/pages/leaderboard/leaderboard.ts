import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonicPage, MenuController, Content,  NavController, NavParams, FabButton } from 'ionic-angular';
import { IService } from '../../services/IService';
import { HttpService } from "../../shared/services/http/http.service";
import { LoadingService } from "../../services/loading-service";
import { HomePage } from "../home/home";
import { DashboardService } from "../../services/dashboard.service";

@IonicPage()
@Component({
    templateUrl: 'leaderboard.html'
})
export class Leaderboard implements OnInit, AfterViewInit{

    page: any;
    service: IService;
    params: any = {};

    public animateItems = [];
    public leaderboards:any[];

    constructor(
        protected http: HttpService,
        public navCtrl: NavController,
        navParams: NavParams,
        private loadingService: LoadingService,
        public menu: MenuController,
        public dashboardService:DashboardService
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

                let self = this;
                for (let i = 0; i < this.leaderboards.length; i++) {
                    setTimeout(function () {
                        self.animateItems.push(self.leaderboards[i]);
                    }, 200 * i);
                }

                this.loadingService.hide();
            },(error) => {
                this.loadingService.hide();
                console.log(error);

            }
        );
    }
}
