import { Injectable } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { Gender } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  private readonly quizzes: Quiz[];

  constructor() {
    this.quizzes = [
      {
        _id: '1', visible: false, user: {
          _id: '1',
          username: 'asdf', email: 'asdf@email.com', birthDate: new Date(1, 1, 1),
          gender: Gender.MALE
        },
        title: '1.Dogs', created: new Date(2019, 2, 1), questions: [
          {
            title: 'How many feet does a puddle have?', options: [
              {answer: '1', correct: false},
              {answer: '2', correct: false},
              {answer: '3', correct: false},
              {answer: '4', correct: true}
            ]
          },
          {
            title: 'How long do you need to walk a dog?', options: [
              {answer: 'For 10 minutes', correct: false},
              {answer: 'For 20 minutes', correct: false},
              {answer: 'For 30 minutes', correct: true},
              {answer: 'For 40 minutes', correct: false}
            ]
          }
        ]
      },
      {
        _id: '2', visible: false, user: {
          _id: '1',
          username: 'asdf', email: 'asdf@email.com', birthDate: new Date(1, 1, 1),
          gender: Gender.MALE
        },
        title: '2.More Dogs', created: new Date(2019, 1, 8), questions: [
          {
            title: 'How many feet does a puddle have?', options: [
              {answer: '1', correct: false},
              {answer: '2', correct: false},
              {answer: '3', correct: false},
              {answer: '4', correct: true}
            ]
          },
          {
            title: 'How long do you need to walk a dog?', options: [
              {answer: 'For 10 minutes', correct: false},
              {answer: 'For 20 minutes', correct: false},
              {answer: 'For 30 minutes', correct: true},
              {answer: 'For 40 minutes', correct: false}
            ]
          }
        ]
      },
      {
        _id: '3', visible: false, user: {
          _id: '1',
          username: 'asdf', email: 'asdf@email.com', birthDate: new Date(1, 1, 1),
          gender: Gender.MALE
        },
        title: '3.Even More Dogs', created: new Date(2019, 2, 4), questions: [
          {
            title: 'How many feet does a puddle have?', options: [
              {answer: '1', correct: false},
              {answer: '2', correct: false},
              {answer: '3', correct: false},
              {answer: '4', correct: true}
            ]
          },
          {
            title: 'How long do you need to walk a dog?', options: [
              {answer: 'For 10 minutes', correct: false},
              {answer: 'For 20 minutes', correct: false},
              {answer: 'For 30 minutes', correct: true},
              {answer: 'For 40 minutes', correct: false}
            ]
          }
        ]
      }
    ];
  }

  findQuiz(quizId: string): Quiz {
    return this.quizzes.find(quiz => quiz._id === quizId);
  }

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }
}
