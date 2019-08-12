import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;
  const toggleButton = (): HTMLButtonElement => fixture.nativeElement.querySelector('[data-test="toggleButton"]')
  const text = (): HTMLParagraphElement => fixture.nativeElement.querySelector('[data-test="text"]')
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle text field when button clicked', () => {
    component.show = true;
    fixture.detectChanges();
    expect(text()).toBeDefined();

    toggleButton().click();
    fixture.detectChanges();
    expect(text()).toBeNull()
  })

});
