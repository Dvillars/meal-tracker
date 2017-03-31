import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './objects/meal';


@Component({
  selector: 'meal',
  templateUrl: '../app/views/meal.html'
})

export class MealComponent {
  @Input() meals: Meal[];
  filterByCalories: number = 100;
  selectedMeal = null;

  onChange(optionFromLog) {
    this.filterByCalories = optionFromLog;
  }

  selectMeal(meal: Meal) {
    this.meals.forEach(function(meal) {
      meal.currentSelect = false;
    });
    this.selectedMeal = meal;
    this.selectedMeal.currentSelect = true;
  }

  checkStatus(meal: Meal) {
    var status1: string = "";
    if(meal.currentSelect) {
      status1 = "selected";
    }
    else {
      status1 = "unselected";
    }

    return status1;
  }

}
