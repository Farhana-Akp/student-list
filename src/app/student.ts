import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { StudentDetails } from './model/student';

@Injectable({
  providedIn: 'root',
})
export class Student {
  
  // class: number = 5;
  // studentList :StudentDetails[]= [{ id: 1, name: "fara", course: "bca", age: 22, class: 2 },
  // { id: 2, name: "iza", course: "bca", age: 12 },
  // { id: 3, name: "afique", course: "bca", age: 18 }];

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<StudentDetails[]>('https://jsonplaceholder.typicode.com/users');
  }

}
