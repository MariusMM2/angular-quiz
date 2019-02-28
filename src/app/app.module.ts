import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
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
    JosefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    // MatFormFieldModule
    // MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
