import { Injectable } from '@angular/core';
import { isNullOrUndefined } from "util";
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { DateFormatter } from '../../helper/date-formatter';


@Injectable()
export class ApiService {
    public url: string;
    constructor(protected http: HttpService) { }

    list(params?: any): Observable<any> {
        if (!params)
            return this.http.get(this.url);
        params = this.serialize(params);
        return this.http.get(this.url, params);
    }

    getById(id: string | number): Observable<any> {
        return this.http.get(`${this.url}${id}`);
    }

    getAll(params?: any): Observable<any> {
        if (!params)
            return this.http.get(`${this.url}all`);
        params = this.serialize(params);
        return this.http.get(`${this.url}all`, params);
    }

    create(resource?: any): Observable<any> {
        resource = this.serialize(resource);
        return this.http.post(this.url, resource);
    }

    update(resource: any, id:any): Observable<any> {
        resource = this.serialize(resource);
        return this.http.put(`${this.url}${id}`, resource);
    }

    // updateByLanguage(resource: any, language: string): Observable<any> {
    //     resource = this.serialize(resource);
    //     return this.http.put(`${this.url}${resource.id}/${language}`, resource);
    // }

    delete(id: string | number): Observable<any> {
        return this.http.delete(`${this.url}${id}`);
    }

    deleteWithBody(resources: any): Observable<any> {
        return this.http.delete(`${this.url}`, { body: (resources) });
    }

    // importar(resource): Observable<any> {
    //     resource = this.serialize(resource);
    //     return this.http.post(`${this.url}import`, resource);
    // }

    /**
     * Gets the data ready for being sent to the API.
     * Converts boolean params into binary params attributes.
     * Formats dates params.
     *
     * @param data The data to serialize
     * @returns {any} The serialized data.
     */
    protected serialize(data: any) {
        let serializedData = {};

        Object.getOwnPropertyNames(data).forEach((attr) => {
            if (isNullOrUndefined(data[attr])) {
                // Does not include it if null or undefined
            } else if (typeof data[attr] == 'boolean') {
                // Converts boolean params into binary int.
                serializedData[attr] = data[attr] ? 1 : 0;
                // serializedData[attr] = data[attr] ? true : false;
            } else if (data[attr]['year'] && data[attr]['month'] && data[attr]['day']) {
                // Puts Dates into the correct format.
                serializedData[attr] = DateFormatter.formatDate(data[attr]);
            } else if (typeof data[attr] == 'string') {
                if (!data[attr].length) {
                } else {
                    // serializedData[attr] = data[attr].split(' ').join(',');
                    serializedData[attr] = data[attr].split(' ').join(' ');
                }
                // Does not include empty strings
            } else if (typeof data[attr] == 'number' && data[attr] == -1) {

            } else if (data[attr].formatted && data[attr].date) {
                serializedData[attr] = data[attr].formatted;
            } else {
                // Leaves it as is.
                serializedData[attr] = data[attr];
            }
        });


        return serializedData;
    }

    /**
     * Takes an object with params and transforms it into
     * a query params string to pass to an http request.
     *
     * @param object The object with the params.
     * @returns {string} The query params string.
     */
    protected object2Params(object: any): string {
        // Transforms the object into a query params array.
        let array: string[] = Object.getOwnPropertyNames(object).map(key => {
            return `${key}=${object[key]}`;
        });
        // Joins the query params into a query params string.
        return array.join('&');
    }
}
