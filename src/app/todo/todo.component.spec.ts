import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  const input = (): HTMLInputElement => fixture.nativeElement.querySelector('[test-data="input"]')
  const addButton = () => fixture.nativeElement.querySelector('[test-data="addButton"]')
  const list = () => fixture.nativeElement.querySelector('[test-data="list"]')
  const listItems = () => fixture.nativeElement.querySelectorAll('[test-data="listItem"]')


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render input', () => {
    expect(input()).not.toBeNull()
  })
  it('should render add button', () => {
    expect(addButton()).not.toBeNull()
  })
  it('should render list', () => {
    expect(list()).not.toBeNull()
  })
  it('should render one list item for each todo', () => {
    expect(listItems.length).toBe(component.todo.length)
  })

  describe('Typing in input and pressing add button', () => {
    it('should add another list item', () => {
      input().value = "New todo"
      input().dispatchEvent(new Event('input'))
      addButton().click();
      expect(component.todos).toContain("New todo")
    })
    it('should clear the input', () => {
      input().value = "New todo"
      input().dispatchEvent(new Event('input'))
      addButton().click();
      expect(component.todo).toBe("")
    })
  })

  it('should not add new list item when input is empty', () => {
    component.todos = []
    input().value = ""
    input().dispatchEvent(new Event('input'))
    addButton().click();
    expect(component.todo.length).toBe(0)
  })
});
