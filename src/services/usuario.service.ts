import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';
import { HttpService } from '../shared/services/http/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService extends ApiService {
    constructor(protected http: HttpService) {
        super(http);
        this.url = 'api/users/';
    }

    getProfile(): Observable<any> {
        return this.http.get(`${this.url}profile`);
    }

    changeStatusNotification(name, value){
        let params = {
            notification: name,
            allow: value
        };
        return this.http.put(`${this.url}notification`, super.serialize(params));
    }
}
