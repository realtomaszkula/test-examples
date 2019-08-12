import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CounterComponent } from './counter/counter.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CounterComponent,
    ToggleComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
