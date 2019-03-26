import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HttpService } from "../../shared/services/http/http.service";
import { ToastService } from "../../services/toast-service";
import { LoadingService } from "../../services/loading-service";
import { UsuarioService } from "../../services/usuario.service";
import { AuthService } from "../../shared/services/auth/auth.service";
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'modal-config',
  templateUrl: 'config.html',
})
export class ModalConfigPage implements OnInit {

  public notifications:any[];

  private map = {
      "pending.auth": "Pending Autorization",
      "inactive.account": "Inactive Account",
      "unanswered.reviews": "Unanswered Reviews",
      "new.invite": "New Invite Sent",
      "new.review": "New Review Received",
      "new.bad.review": "New Bad Review Received",
      "monthly.leaderboard": "Monthly Leaderboard",
      "weekly.leaderboard": "Weekly Leaderboard",
      "monthly.performance": "Monthly Performance",
      "weekly.performance": "Weekly Performance",
      "tagged.review": "Review Tagged",
      "dashboard.completed": "Dashboard Completed"
  };

  constructor(
    protected http: HttpService,
    private loadingService: LoadingService,
    public usuarioService:UsuarioService,
    public toast: ToastService,
    public authService:AuthService,
    public modalCtrl: ModalController
  ) {
  }

  ionViewWillEnter () {
    this.authService.canActivate();
  }

  ngOnInit(){
    this.getProfile()
  }

  getProfile(){
      this.loadingService.show();
      this.usuarioService.getProfile().subscribe((response) => {

          let usuario = response.data;
          this.notifications = [];

          for(let item in usuario.allowed_notifications) {
              this.notifications.push(
                  {
                      key : item,
                      value : usuario.allowed_notifications[item],
                      name : this.map[item]
                  }
              );
          }

          this.loadingService.hide();

      }, (error) => {
          this.loadingService.hide();
      });
  }

  changeValue(name:any, value:any){
    this.loadingService.show();

    this.usuarioService.changeStatusNotification(name, (value == 1) ? 0 : 1).subscribe((data) => {
      this.loadingService.hide();
      this.getProfile();
    }, (error) => {
        this.loadingService.hide();
        this.getProfile();
    });
  }
}