import { Component } from '@angular/core';
import { Meal } from './objects/meal';
import { MEALS } from './models/mock-meals';


@Component({
  selector: 'app-root',
  templateUrl: '../app/views/root.html'
})

export class AppComponent{
  masterMealList: Meal[] = MEALS;

  addMeal(meal) {
    this.masterMealList.push(meal);
  }
}
