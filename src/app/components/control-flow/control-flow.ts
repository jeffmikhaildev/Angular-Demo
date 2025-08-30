import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParaVisible: boolean = true;

  cityList: string[] = ['Pune', 'Mumbai', 'Bangalore', 'Panaji', 'Nagpur'];

  studentList: any[] = [
    { name: 'John Doe', city: 'Pune', isActive: true },
    { name: 'Jane Doe', city: 'Mumbai', isActive: false },
    { name: 'Jim Doe', city: 'Bangalore', isActive: true },
    { name: 'Jake Doe', city: 'Panaji', isActive: false },
    { name: 'Jill Doe', city: 'Nagpur', isActive: true },
  ];

  showP() {
    this.isParaVisible = true;
  }

  hideP() {
    this.isParaVisible = false;
  }
}
