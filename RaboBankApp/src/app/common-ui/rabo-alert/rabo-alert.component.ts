import { Component, OnInit } from '@angular/core';
import { RoboAlertMessageService ,AlertModel} from 'src/app/rabo-services/robo-alert-message-service/robo-alert-message-service';

@Component({
  selector: 'rabo-alert',
  templateUrl: './rabo-alert.component.html',
  styleUrls: ['./rabo-alert.component.css']
})
export class RaboAlertComponent implements OnInit {
  
  constructor(private alertService:RoboAlertMessageService) {
    
   }

  ngOnInit() {
  }

  /**
   * Method that closed the alert box and returns the clicked button boolean value
   * @param alertResponse 
   */
  closeAlert(alertResponse:boolean){
    this.alertService.closeAlert(alertResponse);
  }
}
