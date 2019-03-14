import { Injectable } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { Gender, User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  private readonly quizzes: Quiz[];
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        _id: '1',
        username: '!asff', email: '!asdf@email.com', birthDate: new Date(1, 1, 30),
        gender: Gender.MALE
      },
      {
        _id: '1',
        username: 'asdf', email: 'asdf@email.com', birthDate: new Date(1, 5, 1),
        gender: Gender.FEMALE
      },
      {
        _id: '1',
        username: 'asdf,butdifferent', email: 'asdf,butdifferent@email.com', birthDate: new Date(1, 2, 5),
        gender: Gender.MALE
      }
    ];
    this.quizzes = [
      {
        _id: '1', visible: false, user: this.users[0],
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
        _id: '2', visible: false, user: this.users[1],
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
        _id: '3', visible: false, user: this.users[2],
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

  addQuiz(newQuiz: Quiz) {
    this.quizzes.push(newQuiz);
  }

  findUser(userId: string): User {
    return this.users.find(user => user._id === userId);
  }

  findQuiz(quizId: string): Quiz {
    return this.quizzes.find(quiz => quiz._id === quizId);
  }

  getUsers(): User[] {
    return this.users;
  }

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }
}
