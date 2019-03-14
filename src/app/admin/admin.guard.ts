import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private adminService: AdminService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('AdminGuard on duty here!');

    if (this.adminService.isLoggedIn) {
      return true;
    }

    // this.adminService.redirectUrl = state.url;
    //
    // this.router.navigate(['/home/login']);
    return true;
  }

}
