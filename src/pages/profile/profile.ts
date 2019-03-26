import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpService } from "../../shared/services/http/http.service";
import { ToastService } from "../../services/toast-service";
import { LoadingService } from "../../services/loading-service";
import { UsuarioService } from "../../services/usuario.service";
import { AuthService } from "../../shared/services/auth/auth.service";
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  public usuario:any;

  constructor(
    protected http: HttpService,
    private loadingService: LoadingService,
    public usuarioService:UsuarioService,
    public toast: ToastService,
    public authService:AuthService,
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) {
  }

  ionViewWillEnter () {
    this.authService.canActivate();
  }

  ngOnInit(){
      this.getProfile();
  }

  getProfile(){
      this.loadingService.show();
      this.usuarioService.getProfile().subscribe(
          (response) => {
              this.usuario = response.data;

              this.loadingService.hide();
          },(error) => {
              this.loadingService.hide();
              this.toast.presentToast(error.error.error.message);
          }
      );
  }

  logout(){
    this.authService.logout();
  }

  presentConfigModal() {
      this.navCtrl.push("ModalConfigPage");
  }
}