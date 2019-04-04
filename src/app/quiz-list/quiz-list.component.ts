import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { TempDataService } from '../service/temp-data.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['../quiz/quiz.component.scss']
})
export class QuizListComponent implements OnInit {

  private quizzes: Quiz[];

  constructor(private data: TempDataService) { }

  ngOnInit() {
    this.quizzes = this.data.getQuizzes();
  }

  onQuizClicked(quiz) {
    console.log(quiz);
  }
}
