import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  afterSomeTime:boolean = false;
  afterSomeTimeHide:boolean = true;
  constructor() { }
  
  ngOnInit() {
    this.afterSomeTimeHide = true;
    setTimeout(callBack => {
      this.afterSomeTime = true;

    }, 601);
    setTimeout(callBack => {
      this.afterSomeTimeHide = false

    }, 2000);
    setTimeout(callBack => {
      this.afterSomeTime = false;
      this.afterSomeTimeHide = false
    }, 3001);
  }

}
