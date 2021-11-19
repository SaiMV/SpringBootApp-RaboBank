import { Component, HostListener, Compiler } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { RoboAlertMessageService } from './rabo-services/robo-alert-message-service/robo-alert-message-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /**
   * Variable used to show and hide nav bar in perticular conditions;
   * Nav bar will be displyed only when used is loged in to the application
   */
  showNavMenuBar:boolean  = false;

  /**
   * Variable used to show and hide nav bar and router in perticular conditions
   */
  afterSomeTime:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private alertService:RoboAlertMessageService) {
        setTimeout(callBack =>   {
          this.afterSomeTime = true;
      }, 3001);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
      }
      if (event instanceof NavigationEnd) {
        console.log(this.router.url )
        if (this.router.url == '/' || this.router.url == '/login') {
          this.showNavMenuBar = false;
        } else {
          this.showNavMenuBar = true;
        }
      }
    });
  }
  
}
