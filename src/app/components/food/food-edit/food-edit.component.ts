import { Component, OnInit } from '@angular/core';

import { FoodService } from '../../card/shared/food.service';
import { Food } from '../../card/shared/food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
  providers:[
    FoodService
  ]
})
export class FoodEditComponent implements OnInit {
  foodItem: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    var data = this.foodService.getFood('Desayuno', 'Cafe solo');
  }



}
