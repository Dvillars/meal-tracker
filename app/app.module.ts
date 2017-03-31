import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { MealComponent } from './meal.component';
import { EditComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { ServablePipe } from './servable.pipe';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule
  ],
  declarations: [AppComponent, MealComponent, NewMealComponent, EditComponent, ServablePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
