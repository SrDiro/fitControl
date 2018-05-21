import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { FoodService } from '../../card/shared/food.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
  providers: [FoodService]
})
export class FoodAddComponent implements OnInit {

  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

  onSubmit(foodForm: NgForm) {
    if(foodForm.value.$key != null){
      this.foodService.insertFood(foodForm.value);
    }
  }

}
