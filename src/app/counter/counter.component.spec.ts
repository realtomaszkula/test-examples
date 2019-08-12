import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { cpus } from 'os';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  const incrementButton = (): HTMLButtonElement => fixture.nativeElement.querySelector('[data-test="increment"]')
  const decrementButton = (): HTMLButtonElement => fixture.nativeElement.querySelector('[data-test="decrement"]')
  const counterValue = (): HTMLDivElement => fixture.nativeElement.querySelector('[data-test="counterValue"]')

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display increment button', () => {
    expect(incrementButton()).not.toBeNull()
  })
  it('should display decrement burron', () => {
    expect(decrementButton()).not.toBeNull()
  })
  it('should display counter value', () => {
    expect(counterValue()).not.toBeNull()
  })
  it('should disable button when counter is 0', () => {
    component.value = 0;
    fixture.detectChanges();
    expect(decrementButton().hasAttribute('disabled')).toBe(true)
  })
  it('should increment counter when button clicked', () => {
    component.value = 0;
    fixture.detectChanges();
    incrementButton().click();
    expect(component.value).toBe(1)
  })
  it('should decrement counter when button clicked', () => {
    component.value = 1;
    fixture.detectChanges()
    decrementButton().click()
    expect(component.value).toBe(0)
  })



});
