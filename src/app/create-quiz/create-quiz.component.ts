import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SNACKBAR_TIMEOUT } from '../entities/globals';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';
import { stringify } from 'querystring';
import { User } from '../entities/user';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['../display-quiz/display-quiz.component.scss', './create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  quizForm: FormGroup;
  users: User[];

  constructor(private fb: FormBuilder, private  snackBar: MatSnackBar, private router: Router, private tempData: TempDataService) {
    this.users = this.tempData.getUsers();
  }

  ngOnInit() {
    this.quizForm = this.fb.group(
      {
        _id: [''],
        visible: [''],
        title: ['', [Validators.required, Validators.minLength(3)]],
        userId: ['', Validators.required],
        q1Name: ['', [Validators.required, Validators.minLength(3)]],
        q1A1Title: ['', Validators.required],
        q1A1IsCorrect: [''],
        q1A2Title: ['', Validators.required],
        q1A2IsCorrect: [''],
        q1A3Title: ['', Validators.required],
        q1A3IsCorrect: [''],
        q2Name: ['', [Validators.required, Validators.minLength(3)]],
        q2A1Title: ['', Validators.required],
        q2A1IsCorrect: [''],
        q2A2Title: ['', Validators.required],
        q2A2IsCorrect: [''],
        q2A3Title: ['', Validators.required],
        q2A3IsCorrect: ['']
      }
    );
  }

  onSubmit() {
    console.log(this.quizForm);
    this.snackBar.open('Saving Quiz...', 'Close', {
      duration: SNACKBAR_TIMEOUT,
    });

    this.quizForm.value._id = stringify(this.tempData.getQuizzes().length);
    this.quizForm.value.visible = true;

    if (this.quizForm.valid) {

      const quiz: Quiz = {
        _id: this.quizForm.value._id,
        visible: this.quizForm.value.visible,
        user: this.tempData.findUser(this.quizForm.value.userId),
        title: this.quizForm.value.title,
        created: new Date(),
        questions: [
          {
            title: this.quizForm.value.q1Name,
            options: [
              {
                answer: this.quizForm.value.q1A1Title,
                correct: this.quizForm.value.q1A1IsCorrect
              },
              {
                answer: this.quizForm.value.q1A2Title,
                correct: this.quizForm.value.q1A2IsCorrect
              },
              {
                answer: this.quizForm.value.q1A3Title,
                correct: this.quizForm.value.q1A3IsCorrect
              }
            ]
          },
          {
            title: this.quizForm.value.q2Name,
            options: [
              {
                answer: this.quizForm.value.q2A1Title,
                correct: this.quizForm.value.q2A1IsCorrect
              },
              {
                answer: this.quizForm.value.q2A2Title,
                correct: this.quizForm.value.q2A2IsCorrect
              },
              {
                answer: this.quizForm.value.q2A3Title,
                correct: this.quizForm.value.q2A3IsCorrect
              }
            ]
          }
        ]
      };

      this.tempData.addQuiz(quiz);

      console.log('saving quiz "%s" by "%s"', quiz.title, quiz.user.username);

      this.router.navigate(['portal/display-quizzes']);
    }
  }
}
