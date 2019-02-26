import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
declare const Pusher: any;

/*
  Generated class for the PusherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PusherServiceProvider {

    public pusher:any;

    constructor(public http: HttpClient) {
        this.pusher = new Pusher('a0fbe3c738432fe54d19', {
            cluster: 'us2',
            encrypted: true,
        });
        // this.channel = pusher.subscribe('raulito.lima.93@gmail.com');
    }
    public init(){
        return this.pusher;
    }
}
