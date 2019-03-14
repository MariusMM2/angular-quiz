import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { SNACKBAR_TIMEOUT } from '../entities/globals';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() {
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(SNACKBAR_TIMEOUT + 200),
      tap(val => {
        console.log('logged in as admin!');
        this.isLoggedIn = true;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
