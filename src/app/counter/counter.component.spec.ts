import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { cpus } from 'os';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  const decrementButton = (): HTMLButtonElement => fixture.nativeElement.querySelector('[data-test="decrement"]')
  const incrementButton = (): HTMLButtonElement => fixture.nativeElement.querySelector('[data-test="increment"]')
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

  it('should display decrement button', () => {
    expect(decrementButton()).not.toBeNull()
  })

  it('should display increment button', () => {
    expect(incrementButton()).not.toBeNull()
  })

  it('should display counter value', () => {
    expect(counterValue()).not.toBeNull()
  })

  it('should disabled button when counter is zero', () => {
    component.value = 0;
    expect(decrementButton().hasAttribute('disabled')).toBe(true)
    component.value = 1;
    fixture.detectChanges()
    expect(decrementButton().hasAttribute('disabled')).toBe(false)
  })

  it('clicking on increment button should increment counter', () => {
    component.value = 0;
    incrementButton().click();
    expect(component.value).toBe(1)
  })

  it('clicking on decrement button should decrement counter', () => {
    component.value = 1;
    fixture.detectChanges()
    decrementButton().click()
    expect(component.value).toBe(0)
  })


});
