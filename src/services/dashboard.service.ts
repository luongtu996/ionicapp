import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';
import { HttpService } from '../shared/services/http/http.service';
import { Observable } from "rxjs";

@Injectable()
export class DashboardService extends ApiService {
    constructor(protected http: HttpService) {
        super(http);
        this.url = 'api/stats/';
    }

    getStats(): Observable<any> {
        return this.http.get(`${this.url}dashboard`);
    }

    getStatsByDate(start, end): Observable<any> {
        return this.http.get(`${this.url}dashboard?fecha_desde=${start}&fecha_hasta=${end}`);
    }

    getStatsByLeaderboard(): Observable<any> {
        return this.http.get(`${this.url}leaderboard`);
    }

    getStatsByLeaderboardByRange(start, end){
        return this.http.get(`${this.url}leaderboard?fecha_desde=${start}&fecha_hasta=${end}`);
    }
}
