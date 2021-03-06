import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';

@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['../display-quiz/display-quiz.component.scss']
})
export class DisplayQuizzesComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private tempData: TempDataService) {
  }

  ngOnInit() {
    this.quizzes = this.tempData.getQuizzes();
  }

}
