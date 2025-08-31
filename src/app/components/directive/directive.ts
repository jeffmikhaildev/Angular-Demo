import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [
    NgClass,
    NgStyle,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    SlicePipe,
    JsonPipe,
    DatePipe,
  ],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive implements OnInit {
  div1ClassName = signal<string>('');
  isDiv2Green: boolean = true;

  firstName: string = 'Juan Delacruz';
  courseName: string = 'Angular 20 development';

  rollNumberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  student: { id: number; name: string; age: number } = {
    id: 1,
    name: 'Juan Delacruz',
    age: 25,
  };

  currentDate: Date = new Date();

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    // to trigger API call
    // to subscribe
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Class() {
    this.isDiv2Green = !this.isDiv2Green;
  }
}
