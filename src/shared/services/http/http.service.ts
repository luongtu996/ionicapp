import { Inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor( @Inject('Parameters') private parameters: string, protected http: HttpClient, private storage: Storage) { }

    get(url: string, options?: any): Observable<any> {
        return Observable.fromPromise(this.getToken()).switchMap(
            (token) =>
                Observable.fromPromise(this.getDomain()).switchMap(
                    (domain) =>
                        this.http.get(this.getUrl(domain) + url, { headers: this.addAuthHeader(token), params: this.addAuthParams(options) })
                )
        );
    }

    post(url: string, body?: any, options?: any): Observable<any> {
        return Observable.fromPromise(this.getToken()).switchMap(
            (token) =>
                Observable.fromPromise(this.getDomain()).switchMap(
                    (domain) =>
                        this.http.post(this.getUrl(domain) + url, body,{ headers: this.addAuthHeader(token) })
                )
        );
    }

    put(url: string, body?: any): Observable<any> {
        return Observable.fromPromise(this.getToken()).switchMap(
            (token) =>
                Observable.fromPromise(this.getDomain()).switchMap(
                    (domain) =>
                        this.http.put(this.getUrl(domain) + url, body,{ headers: this.addAuthHeader(token) })
                )
        );
    }

    delete(url: string, body?: any, options?: any): Observable<any> {
        return Observable.fromPromise(this.getToken()).switchMap(
            (token) =>
                Observable.fromPromise(this.getDomain()).switchMap(
                    (domain) =>
                        this.http.delete(this.getUrl(domain) + url,{ headers: this.addAuthHeader(token) })
                )
        );
    }

    addAuthHeader(access_token): HttpHeaders {
        if (access_token) {
            return new HttpHeaders().set('Authorization', `Bearer ${ access_token }`);
        } else {
            return new HttpHeaders();
        }
    }

    addAuthParams(options: any): HttpParams {
        // If undefined it's set to an empty object
        options = (options) ? new HttpParams() : options;

        return options;
    }

    getUrl(domain){
        return  this.parameters['API_URL'].replace('{domain}', domain);
    }

    getToken(){
        return  this.storage.get('access_token').then((item) => {
            return item;
        });
    }

    getDomain(){
        return  this.storage.get('domain').then((item) => {
            return item;
        });
    }
}