import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(LoginComponent.SNACKBAR_TIMEOUT + 200),
      tap(val => {
        console.log('logged in!');
        this.isLoggedIn = true;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
