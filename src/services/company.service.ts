import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';
import { HttpService } from '../shared/services/http/http.service';

@Injectable()
export class CompanyService extends ApiService {
    constructor(protected http: HttpService) {
        super(http);
        this.url = 'api/companies/';
    }
}
