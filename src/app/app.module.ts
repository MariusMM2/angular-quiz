import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MortenComponent } from './morten/morten.component';
import { JosefComponent } from './josef/josef.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { FindQuizComponent } from './find-quiz/find-quiz.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQuizComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    MortenComponent,
    JosefComponent,
    HomeComponent,
    PortalComponent,
    FindQuizComponent,
    CreateQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
