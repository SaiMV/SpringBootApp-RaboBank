import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RaboAuthGuardService implements CanActivate {
  
  /**
   * Constructor class used for RaboAuthGuardService to instantiate the Router object;
   * @param router : instance of Router class used for navigation 
   */
  constructor(private router: Router) {
    console.log("mmm")

  }

  /**
   * Interface that a class can implement to be a guard deciding if a route can be activated.
   * If all guards return true, navigation will continue.
   * If any guard returns false, navigation will be cancelled. If any guard returns a UrlTree,
   * current navigation will be cancelled and 
   * a new navigation will be kicked off to the UrlTree returned from the guard. 
   * @param route : ActivatedRouteSnapshot instance  that is used to pass
   * @param state : 
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // not logged in so redirect to a new page
    if (localStorage.getItem('currentUser')) {
      if (state.url.endsWith('/login') || state.url.endsWith('/')) {
        return false;
      }
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
