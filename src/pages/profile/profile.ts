import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HttpService } from "../../shared/services/http/http.service";
import { ToastService } from "../../services/toast-service";
import { LoadingService } from "../../services/loading-service";
import { UsuarioService } from "../../services/usuario.service";
import { AuthService } from "../../shared/services/auth/auth.service";

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
    public usuarioServie:UsuarioService,
    public toast: ToastService,
    public authService:AuthService,
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
      this.usuarioServie.getProfile().subscribe(
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
}
