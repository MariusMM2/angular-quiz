/* tslint:disable:no-angle-bracket-type-assertion */
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SNACKBAR_TIMEOUT } from '../entities/globals';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';
import { User } from '../entities/user';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['../display-quiz/display-quiz.component.scss', './create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  quizForm: FormGroup;
  users: User[];

  constructor(private fb: FormBuilder, private  snackBar: MatSnackBar, private router: Router, private data: TempDataService) {
    this.users = this.data.getUsers();
  }

  ngOnInit() {
    this.quizForm = this.fb.group(
      {
        title: ['', [Validators.required, Validators.minLength(3)]],
        user: ['', Validators.required],
        questions: this.fb.array([])
      }
    );
    this.newQuestion();
  }

  newQuestion() {
    const question = this.fb.group({
      title: ['', Validators.required],
      options: this.fb.array([])
    });

    const questions = this.quizForm.controls.questions as FormArray;
    const options = question.controls.options as FormArray;
    options.push(this.newOptionGroup());
    options.push(this.newOptionGroup());

    questions.push(question);
  }

  newOption(questionIndex: number) {
    const option = this.newOptionGroup();
    const questions = this.quizForm.controls.questions as FormArray;
    const options = (<FormArray> questions.controls[questionIndex]).controls['options'] as FormArray;
    options.push(option);
  }

  onSubmit() {
    console.log(this.quizForm);
    this.snackBar.open('Saving Quiz...', 'Close', {
      duration: SNACKBAR_TIMEOUT,
    });

    this.quizForm.value._id = String(this.data.getQuizzes().length);
    this.quizForm.value.user = this.data.findUser(this.quizForm.value.user);
    this.quizForm.value.visible = true;
    this.quizForm.value.created = new Date();

    if (this.quizForm.valid) {

      // const quiz: Quiz = {
      //   _id: this.quizForm.value._id,
      //   visible: this.quizForm.value.visible,
      //   user: this.data.findUser(this.quizForm.value.userId),
      //   title: this.quizForm.value.title,
      //   created: new Date(),
      //   questions: []
      // };

      this.data.addQuiz(this.quizForm.value as Quiz);
      // this.data.addQuiz(this.quizForm.values as Quiz);

      // console.log('saving quiz id:%s by "%s"', quiz._id, quiz.user.username);

      this.router.navigate(['portal/display-quizzes']);
    }
  }

  private newOptionGroup() {
    return this.fb.group({
      answer: ['', Validators.required],
      correct: [false, Validators.required]
    });
  }
}
