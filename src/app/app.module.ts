import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { LoginService } from "../services/login-service";
import { Parameters } from "../../parameters";
import { HttpService } from "../shared/services/http/http.service";
import { TemplateService } from "../services/template.service";
import { AuthService } from "../shared/services/auth/auth.service";
import { CompanyService } from "../services/company.service";
import { SmsService } from "../services/sms.service";
import { LeaderboardService } from "../services/leaderboard-service";
import { DashboardService } from "../services/dashboard.service";
import { CalendarModule } from "ion2-calendar";
import { UsuarioService } from "../services/usuario.service";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { PusherServiceProvider } from '../providers/pusher-service/pusher-service';
import { ReviewService } from "../services/review.service";




@NgModule({
    declarations: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BarcodeScanner,
        Camera,
        ToastService,
        LoadingService,
        LoginService,
        HttpService,
        TemplateService,
        AuthService,
        CompanyService,
        SmsService,
        LeaderboardService,
        DashboardService,
        UsuarioService,
        LocalNotifications,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        { provide: 'Parameters', useClass: Parameters },
        PusherServiceProvider,
        ReviewService
    ],
    imports: [
        BrowserModule,
        HttpModule, HttpClientModule,
        AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
        AngularFireDatabaseModule, AngularFireAuthModule,
        IonicModule.forRoot(MyApp),
        CalendarModule,

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
