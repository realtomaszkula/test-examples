import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render header', () => {
    const header = fixture.nativeElement.querySelector('header');

    expect(header).toBeDefined()
  });

  it('should render text in header', () => {
    const header = fixture.nativeElement.querySelector('header');

    expect(header.textContent).toContain('Header')
  });  
  
  it('shoud render text in footer', () => {
    const footer = fixture.nativeElement.querySelector('footer');

    expect(footer.textContent).toContain('Footer')
  })

  it('shoud render title in section', () => {
    const section = fixture.nativeElement.querySelector('section')

    expect(section.textContent).toContain(component.title)
    component.title = 'world'
    fixture.detectChanges();
    expect(section.textContent).toContain('world')
  })


  it('shoud conditionally render div based on show property', () => {
    const div = () => fixture.nativeElement.querySelector('[data-test="if"]')

    expect(div()).not.toBeNull();
    component.show = false; 
    fixture.detectChanges();
    expect(div()).toBeNull();
    component.show = true; 
    fixture.detectChanges();
    expect(div()).not.toBeNull();
  })


});
