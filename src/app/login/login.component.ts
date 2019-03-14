import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-login', // name of component
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public static SNACKBAR_TIMEOUT = 2000;
  loginForm: FormGroup;

  // DI - Dependency injection
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,
              private router: Router, private authService: AuthService,
              private adminService: AdminService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]], // multiple validators
        password: ['', Validators.required] // Single validator
      }
    );
  }

  onSubmit(): void {
    this.snackBar.open('One second, logging in..', 'Close', {
      duration: LoginComponent.SNACKBAR_TIMEOUT,
    });

    console.log(this.loginForm);

    if (this.loginForm.valid) {
      // Send the data to the server to verify the user login
      if (this.loginForm.value.username === 'admin') {
        // log in as admin
        console.log('trying to log in as admin');
        this.adminService.login().subscribe(result => {

          console.log(result);
          // waits(2000);
          console.log('navigating to display-quiz as admin');

          // navigate after successful login.
          this.router.navigate(['portal/display-quiz']);
        });
      } else {
        console.log('trying to log in');
        this.authService.login().subscribe(result => {

          console.log(result);
          // waits(2000);
          console.log('navigating to display-quiz');

          // navigate after successful login.
          this.router.navigate(['portal/display-quiz']);
        });
      }
    } else {
      // Show error message or something else.
    }
  }
}
