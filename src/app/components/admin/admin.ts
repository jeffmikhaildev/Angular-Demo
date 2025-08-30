import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  firstName: string = 'John Doe';

  courseName: string = 'Angular 20';

  rollNo: number = 123;
}
