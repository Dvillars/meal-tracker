import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './objects/meal';

@Pipe({
  name: "servable",
  pure: false
})

export class ServablePipe implements PipeTransform {


  transform() {}
}
