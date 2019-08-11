import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <button (click)="increment()" data-test="increment">+</button>
  <div data-test="counterValue">{{value}}</div>
  <button (click)="decrement()" data-test="decrement" [disabled]="value === 0">-</button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input()
  value: number = 0;

  @Output()
  valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.value++
    this.valueChange.emit(this.value);
  }

  decrement() {
    this.value--
    this.valueChange.emit(this.value);
  }
}
