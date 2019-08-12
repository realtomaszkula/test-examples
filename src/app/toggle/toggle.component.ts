import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
  <button data-test="toggleButton" (click)="show = !show">toggle</button>
  <p data-test="text" *ngIf="show">text</p>
  
  `,
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
