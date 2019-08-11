import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>In parent component: {{ value }}</div>
  <app-counter [value]="value" (valueChange)="value = $event"></app-counter>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 5;
}
