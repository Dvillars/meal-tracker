import { Component, Output, EventEmitter } from '@angular/core';
import{ Meal } from './objects/meal';

@Component({
  selector: 'new-meal',
  templateUrl: './../app/views/new-meal.html'
})

export class NewMealComponent {
  @Output() sendNewObject = new EventEmitter();

  submitForm(name, details, calories) {
    var newMeal: Meal = new Meal(name, details, calories);
    this.sendNewObject.emit(newMeal);
  }
}
