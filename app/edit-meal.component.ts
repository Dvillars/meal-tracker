import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './objects/meal';

@Component ({
  selector: 'edit-meal',
  templateUrl: '../app/views/edit-meal.html'
})

export class EditComponent{
  @Input() meal: Meal;

}
