import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isUndefined } from "util";
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor( @Inject('Parameters') private parameters: string, protected http: HttpClient) { }

    get(url: string, options?: any): Observable<any> {
        return this.http.get(this.getUrl() + url, { headers: this.addAuthHeader(), params: this.addAuthParams(options) });
    }

    post(url: string, body?: any, options?: any): Observable<any> {
        return this.http.post(this.getUrl() + url, body,{ headers: this.addAuthHeader() });
    }

    put(url: string, body?: any): Observable<any> {
        return this.http.put(this.getUrl() + url, body,{ headers: this.addAuthHeader() });
    }

    delete(url: string, body?: any, options?: any): Observable<any> {
        return this.http.delete(this.getUrl() + url,{ headers: this.addAuthHeader() });
    }

    deleteWithBody(url:string, body?:any, options?:any): Observable<any> {
        return this.http.request('delete', this.getUrl() + url,{ headers: this.addAuthHeader() , body});
    }

    addAuthHeader(): HttpHeaders {
        if (localStorage.getItem('access_token')) {
            return new HttpHeaders().set('Authorization', `Bearer ${ localStorage.getItem('access_token') }`);
        } else {
            return new HttpHeaders();
        }
    }

    addAuthParams(options: any): HttpParams {
        // If undefined it's set to an empty object
        options = isUndefined(options) ? new HttpParams() : options;

        return options;
    }

    getUrl(){
        return  this.parameters['API_URL'];
    }
}