import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  imports: [UpperCasePipe],
  templateUrl: './api.html',
  styleUrl: './api.css',
})
export class Api implements OnInit {
  http = inject(HttpClient);

  userList: any[] = [];
  todoList: any[] = [];
  busBookingUsers: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getUsers();
    this.getTodos();
    this.getBusBookingUsers();
  }

  getUsers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }

  getTodos() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((response: any) => {
        this.todoList = response.slice(0, 15);
      });
  }

  getBusBookingUsers() {
    return this.http
      .get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers')
      .subscribe((res: any) => {
        this.busBookingUsers = res.data.slice(0, 10);
      });
  }
}
