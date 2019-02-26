import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';
import { HttpService } from '../shared/services/http/http.service';
import { Observable } from "rxjs";

@Injectable()
export class ReviewService extends ApiService {
    constructor(protected http: HttpService) {
        super(http);
        this.url = 'api/reviews/';
    }

    get(filters?:any): Observable<any> {
        return this.http.get(`${this.url}`, filters);
    }
}
