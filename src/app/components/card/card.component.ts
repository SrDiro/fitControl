import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodListComponent } from '../food-list/food-list.component';

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
  public tipoComida: string;
  foodItem: Food[];

  constructor( private activatedRoute: ActivatedRoute, private foodService : FoodService, private foodListComponent : FoodListComponent ) { 
    this.foodListType = this.activatedRoute.snapshot.params['food-type'];
  }

  ngOnInit() {
    var data = this.foodService.getData(this.foodListComponent.getTitle());
    data.snapshotChanges().subscribe(item => {
      console.log(item);
      this.foodItem = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.foodItem.push(y as Food);
      });
    });
  }

}
