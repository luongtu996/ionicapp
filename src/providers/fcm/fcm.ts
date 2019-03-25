import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { ApiService } from "../../shared/services/api/api.service";
import { HttpService } from "../../shared/services/http/http.service";

@Injectable()
export class FcmProvider extends ApiService {

    constructor(
        protected http: HttpService,
        public firebaseNative: Firebase,
        public afs: AngularFirestore,
        public platform: Platform,
    ) {
        super(http);
        this.url = 'api/fcm/';
    }

    async getToken(usuario, uuid){

        let token;

        if(this.platform.is('android')){
            token = await this.firebaseNative.getToken();
        }

        if(this.platform.is('ios')){
            token = await  this.firebaseNative.getToken();
            await this.firebaseNative.grantPermission();
        }

        if(this.platform.is('cordova')){

        }

        this.saveTokenToFirestore(token, usuario, uuid);
    }

    private saveTokenToFirestore(token, usuario, uuid){
        if(!token) return;

        const devicesRef = this.afs.collection('devices');

        const docData = {
            token,
            userId: usuario.id + uuid
        };

        this.updateFCM(token, usuario.id, uuid).subscribe((response) => {
                return devicesRef.doc(token).set(docData);
            }, (error) => {
            return;
        });
    }

    listenToNotifications(){
        return this.firebaseNative.onNotificationOpen();
    }

    updateFCM(token:any, userId, uiid){
        let params = {
            _key: userId + uiid,
            _value: token
        };
        return this.http.post(`${this.url}`, params);
    }
}
