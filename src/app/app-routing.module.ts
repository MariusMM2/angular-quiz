import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JosefComponent } from './josef/josef.component';
import { MortenComponent } from './morten/morten.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { FindQuizComponent } from './find-quiz/find-quiz.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: '', redirectTo: 'home/login', pathMatch: 'full'}, // if baseUrl => go to login

  {
    path: 'home', component: HomeComponent, children: [
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {
        path: 'login', component: LoginComponent, children: [
          {path: 'morten', component: MortenComponent},
          {path: 'josef', component: JosefComponent}
        ]
      },
      {path: 'register', component: RegisterComponent}
    ]
  },

  {
    // path: 'portal', component: PortalComponent, canActivate: [AuthGuard, AdminGuard], children: [
    path: 'portal', component: PortalComponent, /*canActivate: [AuthGuard],*/ children: [
      {path: 'display-quizzes', component: QuizListComponent},
      {path: 'display-quiz/:id', component: QuizComponent},
      {path: 'find-quiz', component: FindQuizComponent},
      {path: 'create-quiz', component: CreateQuizComponent}
    ]
  },


  {path: '**', component: PageNotFoundComponent} // wildcard - if no routes matched, display this
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
