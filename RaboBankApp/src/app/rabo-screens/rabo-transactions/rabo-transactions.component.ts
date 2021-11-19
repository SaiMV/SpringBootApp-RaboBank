import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RabotransactionsService, FILE_TYPE } from 'src/app/rabo-services/rabo-transactions-service/rabo-transactions-service';
import { RaboAppConstants } from 'src/app/utility/rabo-app-constants/rabo-app-constants';

@Component({
  selector: 'rabo-transactions',
  templateUrl: './rabo-transactions.component.html',
  styleUrls: ['./rabo-transactions.component.css']
})
export class RaboTransactionsComponent implements OnInit, OnDestroy {

  private destroySubscriber: any;
  private destroySubscriberAll: any;

  transactionRespData: any;
  invalidTransactionRespData: any;
  tableConfig: any = []
  tableDataFinder: string;
  defaultDropDownValue:string;
  dropDownData: any = []
  firstDropHeader:String = "";
  secondDropHeader:String = "";

  constructor(private transactionService: RabotransactionsService) {
    
  }

  ngOnInit() {
    this.firstDropHeader = RaboAppConstants.HEADER_NAME_TRANSACTION_1
    this.secondDropHeader = RaboAppConstants.HEADER_NAME_TRANSACTION_2
    this.dropDownData = [
      FILE_TYPE.XML,
      FILE_TYPE.EXCEL
    ]
    this.defaultDropDownValue = "XML"
    this.getTransactionList(this.defaultDropDownValue);
    this.getInvalidTransactionList(this.defaultDropDownValue);
    this.tableConfig = [
      { fieldName: "transactionReference", headerName: "Transaction Reference" },
      { fieldName: "accountNumber", headerName: "Account Number" },
      { fieldName: "description", headerName: "Description" },
      { fieldName: "startBalance", headerName: "Start Balance" },
      { fieldName: "mutation", headerName: "Mutation" },
      { fieldName: "endBalance", headerName: "End Balance" },
    ]
    this.tableDataFinder = "customerStatement";
  }

  /**
   * Method getTransactionList() is used to get the list of transaction data from the service side.
   * @param type 
   */
  getTransactionList(type) {
    if (type == "" || type == null) {
      return;
    }
    if (this.destroySubscriberAll != null || this.destroySubscriberAll != undefined) {
      this.destroySubscriberAll.complete();
      this.destroySubscriberAll.unsubscribe();
    }
    this.destroySubscriberAll = this.transactionService.getTransactionListData(type).subscribe(data => {
      this.transactionRespData = data;
    })
  }

  /**
   * Method getInvalidTransactionList() is used to get the list of invalid transaction data from the service side.
   * @param type 
   */
  getInvalidTransactionList(type) {
    if (type == "" || type == null) {
      return;
    }
    if (this.destroySubscriber != null || this.destroySubscriber != undefined) {
      this.destroySubscriber.complete();
      this.destroySubscriber.unsubscribe();
    }
    this.destroySubscriber = this.transactionService.getInvalidTransactionListData(type).subscribe(data => {
      this.invalidTransactionRespData = data;
    })
  }

  ngOnDestroy(): void {
    if (this.destroySubscriber != null || this.destroySubscriber != undefined) {
      this.destroySubscriber.complete();
      this.destroySubscriber.unsubscribe();
      this.destroySubscriber= null
    }
    if (this.destroySubscriberAll != null || this.destroySubscriberAll != undefined) {
      this.destroySubscriberAll.complete();
      this.destroySubscriberAll.unsubscribe();
      this.destroySubscriberAll = null
    }
  }


}
