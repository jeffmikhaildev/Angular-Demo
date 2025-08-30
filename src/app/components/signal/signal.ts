import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  firstName: string = 'John Doe';

  courseName = signal<string>('Angular');

  courseDuration = signal<string>('15 Videos');

  courseDetails = computed(() => {
    return `${this.courseName()} - ${this.courseDuration()}`;
  });

  constructor() {
    this.firstName = 'Jane Doe';
    console.log(this.firstName);

    this.courseName.set('React');
    console.log(this.courseName());
  }
}
