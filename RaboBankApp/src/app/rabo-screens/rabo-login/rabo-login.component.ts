import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rabo-login',
  templateUrl: './rabo-login.component.html',
  styleUrls: ['./rabo-login.component.css']
})
export class RaboLoginComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  /**
   * Method used to navigate to the home screen 
   */
  submitClick() {
    localStorage.setItem("currentUser", "SS")
    this.router.navigate(['home']);
  }
}
