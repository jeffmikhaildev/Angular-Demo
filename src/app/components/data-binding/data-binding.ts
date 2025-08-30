import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular 20 Tutorial';
  productPrice: number = 11500;
  maxLength: number = 5;
  minChar: number = 3;
  inputType: string = 'radio';
  myClassName: string = 'myClass';

  constructor() {}

  showWelcomeMessage() {
    alert('Welcome to the Angular 20 Tutorial');
  }

  changeCourseName() {
    this.courseName = 'React JS Course';
  }

  onCityChange() {
    alert('City Changed');
  }
}
