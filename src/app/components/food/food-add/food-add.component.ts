import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { FoodService } from '../../card/shared/food.service';
import { FoodListComponent } from '../food-list/food-list.component';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
  providers: [FoodService]
})
export class FoodAddComponent implements OnInit {
  typeFood: string = 'Desayuno';
  nameFood: string = null;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

  filterFood(filterVal: string) {
    this.typeFood = filterVal;
  }

  getName(nameFood: string) {
    this.nameFood = nameFood;
  }

  onSubmit(foodForm: NgForm) {
    this.foodService.insertFood(foodForm.value, this.typeFood, this.nameFood);
  }
}
