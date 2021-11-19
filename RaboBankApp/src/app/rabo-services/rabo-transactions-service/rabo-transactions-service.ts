import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RaboServiceProvider } from 'src/app/utility/rabo-service-provider';
import { RaboServiceURLConstants } from 'src/app/utility/rabo-app-constants/rabo-service-url-constants';

export enum FILE_TYPE {
    EXCEL = 'Excel',
    XML = "XML"
}

@Injectable({
    providedIn: 'root',
})
export class RabotransactionsService {

    /**
     * Constructor which initializes RaboServiceProvider instance.
     */
    constructor(private raboServiceProvider: RaboServiceProvider) {

    }

    /**
     * Method getListData() is used to get the XML or CSV data from the service side.
     * @param type : is the argumet Xml or
     */
    getTransactionListData(type: string) {
        let params = new HttpParams().set('fileType', type);
        return this.raboServiceProvider.get(RaboServiceURLConstants.RABO_TRANSACTIONS_RECORDS_ALL,params)
    }

     /**
     * Method getListData() is used to get the XML or CSV data from the service side.
     * @param type : is the argumet Xml or
     */
    getInvalidTransactionListData(type: string) {
        let params = new HttpParams().set('fileType', type);
        return this.raboServiceProvider.get(RaboServiceURLConstants.RABO_TRANSACTIONS_RECORDS_VALID,params)
    }

}