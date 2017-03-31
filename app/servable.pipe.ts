import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './objects/meal';

@Pipe({
  name: "servable",
  pure: false
})

export class ServablePipe implements PipeTransform {

  transform(input: Meal[], desiredServable) {

    var output: Meal[] = [];

    if(desiredServable === "highMeals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredServable === "lowMeals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;

    } else {
      return input;
    }
  }


}
