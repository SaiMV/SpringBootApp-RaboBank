import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RoboAlertMessageService implements OnDestroy {

    showAlertMsg: boolean = false;
    alertModel:AlertModel = null;
    private alertServiceSubscriber: any = new Subject<boolean>();

    constructor(){

    }

    /**
     * Method used to open the alert box. retruns instance of subject of boolean type.
     * @param alertModel : The model used for 
     */
    openAlert(alertModel:AlertModel):Subject<boolean>{
        if(alertModel == null || alertModel == undefined){
            return;
        }
        if(alertModel.alertHeader == null || alertModel.alertHeader == undefined
        || alertModel.alertMsg == null || alertModel.alertMsg == undefined){
            return;
        }
        this.alertModel = alertModel;
        this.showAlertMsg = true;
        return this.alertServiceSubscriber;
    }

    /**
     * Method used to close the alert box and notify the open subscriber the selected button click:
     *  true for ok button and false for close button
     * @param alertResponse 
     */
    closeAlert(alertResponse:boolean) {
        this.alertServiceSubscriber.next(alertResponse);
        this.showAlertMsg = false;
    }


  ngOnDestroy(): void {
    if (this.alertServiceSubscriber != null || this.alertServiceSubscriber != undefined) {
      this.alertServiceSubscriber.complete();
      this.alertServiceSubscriber.unsubscribe();
      this.alertServiceSubscriber = null;
    }
  }

}

export class AlertModel{
    alertHeader:string;
    alertMsg:string;
}


