import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { HttpService } from "../../shared/services/http/http.service";
import { LoadingService } from "../../services/loading-service";
import { DashboardService } from "../../services/dashboard.service";
import { ToastService } from "../../services/toast-service";
import { AuthService } from "../../shared/services/auth/auth.service";


import { ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";

@IonicPage()
@Component({
    templateUrl: 'leaderboard.html'
})
export class Leaderboard implements OnInit{

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
        public modalCtrl: ModalController,
    ) {

    }

    ionViewWillEnter () {
        // this.authService.canActivate();
    }

    ngOnInit(){
        this.getLeaderboard();
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

    range(){
        const options: CalendarModalOptions = {
            pickMode: 'range',
            title: 'Select Date',
            color: '#2962ff',
            canBackwardsSelected: true
        };
        let myCalendar =  this.modalCtrl.create(CalendarModal, {
            options: options
        });

        myCalendar.present();

        myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
            if(date) {
                if (date['from'] && date['to']) {
                    this.loadingService.show();
                    this.dashboardService.getStatsByLeaderboardByRange(date['from'].string, date['to'].string).subscribe(
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
                        }, (error) => {
                            this.toast.presentToast(error.error.error.message);
                            this.loadingService.hide();
                        }
                    );
                }
            }
        })
    }
}
