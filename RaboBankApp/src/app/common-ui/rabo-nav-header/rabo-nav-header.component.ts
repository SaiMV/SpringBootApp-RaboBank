import { Component, OnInit } from '@angular/core';
import { RoboAlertMessageService ,AlertModel} from 'src/app/rabo-services/robo-alert-message-service/robo-alert-message-service';
import { Router } from '@angular/router';

@Component({
  selector: 'rabo-nav-header',
  templateUrl: './rabo-nav-header.component.html',
  styleUrls: ['./rabo-nav-header.component.css']
})
export class RoboNavHeaderComponent implements OnInit {

  constructor( private alertService:RoboAlertMessageService,
    private router: Router) { }

  ngOnInit() {

  }

 /**
  * Method used to show alert box to confirm from user to exit the application
  */
  logout(){
    let alerModel:AlertModel = new AlertModel();
    alerModel.alertHeader = 'Logout';
    alerModel.alertMsg = 'Do you want to exit?';
    this.alertService.openAlert(alerModel).subscribe(data => {
      if(data){
        localStorage.removeItem("currentUser")
        this.router.navigate(['/login']);
        }
    });
  }

}
