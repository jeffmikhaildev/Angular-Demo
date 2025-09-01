import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUser implements OnInit {
  http = inject(HttpClient);

  userList: any[] = [];

  // user: any = {
  //   userId: 0,
  //   emailId: '',
  //   password: '',
  //   fullName: '',
  //   mobileNo: '',
  // };

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.email,
    ]),
    password: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    mobileNo: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.getUsers();
  }

  onReset() {
    this.userForm.reset({
      userId: 0,
      emailId: '',
      password: '',
      fullName: '',
      mobileNo: '',
    });
  }

  getUsers() {
    this.http
      .get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((response: any) => {
        this.userList = response;
      });
  }

  onSaveUser() {
    debugger;
    const newUser = this.userForm.value;

    this.http
      .post('https://api.freeprojectapi.com/api/GoalTracker/register', newUser)
      .subscribe({
        next: (result: any) => {
          debugger;
          alert('User created successfully!');
          this.getUsers();
        },
        error: (error) => {
          debugger;
          alert('Error occurred while saving user: ' + error.message);
        },
      });
  }
}
