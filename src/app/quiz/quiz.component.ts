import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quiz } from '../entities/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() quizInput: Quiz;
  @Output() quizClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onQuizClick(quiz: Quiz) {
    this.quizClicked.emit(quiz);
  }
}
