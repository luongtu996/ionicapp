import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HttpService } from "../../shared/services/http/http.service";
import { LoadingService } from "../../services/loading-service";
import { ToastService } from "../../services/toast-service";
import { AuthService } from "../../shared/services/auth/auth.service";

import { ModalController } from 'ionic-angular';
import { ReviewService } from "../../services/review.service";
import { Util } from "../../shared/util/util";


@IonicPage()
@Component({
    templateUrl: 'review.html'
})
export class ReviewPage implements OnInit{

    public animateItems = [];
    public reviews:any[];

    public totalItems: number;
    public firstLoad = true;
    public filters: any = {
        limit: 20,
        offset: 0,
        q: '',
        sort: '',
    };

    public my_reviews = false;

    constructor(
        protected http: HttpService,
        public authService:AuthService,
        private loadingService: LoadingService,
        public toast: ToastService,
        public modalCtrl: ModalController,
        public reviewService: ReviewService
    ) {
        this.filters.only_mine = 0;

    }

    ionViewWillEnter () {
        this.authService.canActivate();
    }

    ngOnInit(){
        this.getReviews();
    }

    getReviews(infiniteScroll?:any){
        this.loadingService.show();
        if(this.firstLoad == false)
            this.filters.offset ++;

        this.reviewService.get(this.filters).subscribe(
            (response) => {
                this.reviews = response.data.results;
                if (response.data.paging) {
                    this.totalItems = response.data.paging.total;
                    this.filters.offset = response.data.paging.offset;
                }
                this.firstLoad = false;
                let self = this;
                for (let i = 0; i < this.reviews.length; i++) {
                    setTimeout(function () {
                        self.animateItems.push(self.reviews[i]);
                    }, 200 );
                }

                if(infiniteScroll)
                    infiniteScroll.complete();
                this.loadingService.hide();

            },(error) => {
                this.loadingService.hide();
                this.toast.presentToast(error.error.error.message);
                if(infiniteScroll)
                    infiniteScroll.complete();
            }
        );
    }

    colorBgAvatar(usuario:any){
        return (Util[usuario[0].toLowerCase()]) ? Util[usuario[0].toLowerCase()] : "#4FF6C6";
    }

    getColor(num, puntuation){

        if(num <= puntuation)
            return '#fde16d';
        else
            return '#b0c4de';
    }

    changeFilter(){
        this.my_reviews = !this.my_reviews;
        this.animateItems = [];
        this.filters.offset = 0;
        this.firstLoad = true;
        this.filters.only_mine = (this.my_reviews) ? 1 : 0;
        this.getReviews();
    }
}
