import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class RaboServiceProvider {

    /**
     * Constructor which initializes HttpClient instance
     */
    constructor(private http: HttpClient) {

    }

    /**
     * Method post() used for post operation in http rest services
     * @param url : Url of the service to be called
     * @param params : Conatains the parameters to be passed to the server side
     */
    post(url:any,params:HttpParams) {
        return (this.http.post(url,{params}));
    }

   /**
     * Method get() used for get operation in http rest services
     * @param url : Url of the service to be called
     * @param params : Conatains the parameters to be passed to the server side
     */
    get(url:any,params:HttpParams) {
        return (this.http.get(url,{params}));
    }

}