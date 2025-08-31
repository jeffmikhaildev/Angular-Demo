import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  http = inject(HttpClient);

  userList: any[] = [];

  user: any = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
    mobileNo: '',
  };

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((response: any) => {
        this.userList = response;
      });
  }

  onReset() {
    this.user = {
      userId: 0,
      emailId: '',
      password: '',
      fullName: '',
      mobileNo: '',
    };
  }

  onSaveUser() {
    this.http
      .post(
        'https://api.freeprojectapi.com/api/GoalTracker/register',
        this.user
      )
      .subscribe({
        next: (result: any) => {
          alert('User created successfully!');
          this.getUsers();
        },
        error: (error) => {
          alert('Error occurred while saving user: ' + error.message);
        },
      });
  }

  onEditUser(user: any) {
    this.user = { ...user };
  }

  onUpdateUser() {
    this.http
      .put(
        `https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=${this.user.userId}`,
        this.user
      )
      .subscribe({
        next: (result: any) => {
          alert('User updated successfully!');
          this.getUsers();
        },
        error: (error) => {
          alert('Error occurred while updating user: ' + error.message);
        },
      });
  }

  onDeleteUser(userId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');

    if (confirmDelete) {
      this.http
        .delete(
          `https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=${userId}`
        )
        .subscribe({
          next: (result: any) => {
            alert('User deleted successfully!');
            this.getUsers();
          },
          error: (error) => {
            alert('Error occurred while deleting user: ' + error.message);
          },
        });
    }
  }
}
