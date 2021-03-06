import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodListComponent } from '../food/food-list/food-list.component';

// Inyectar food.service
import { FoodService } from './shared/food.service';

import { Food } from './shared/food.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers :[FoodService]
})

export class CardComponent implements OnInit{
  public foodListType: string;
  foodItem: Food[];

  constructor( private activatedRoute: ActivatedRoute, private foodService : FoodService, private foodListComponent : FoodListComponent, private router: Router ) { 
    this.foodListType = this.activatedRoute.snapshot.params['food-type'];
  }

  ngOnInit() {
    var data = this.foodService.getData(this.foodListComponent.getTitle());
    data.snapshotChanges().subscribe(item => {
      this.foodItem = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.foodItem.push(y as Food);
        console.log(this.foodItem);
      });
    });
  }

  deleteFood(keyFood: string){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.foodService.deleteFood(keyFood);
    }
  }

  editFood(key: string){
    this.router.navigate(['/food-edit'])
  }

}
