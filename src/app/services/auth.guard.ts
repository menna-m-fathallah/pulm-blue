import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGard implements CanActivate {
  constructor(private router: Router, private sharedData: SharedDataService) {

  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.sharedData.getToken()) {
      return true;
    }
    else {
      this.router.navigateByUrl("/login")
      return false;
    }
  }
}
