import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FoodListComponent } from '../../food/food-list/food-list.component';
import { Food } from './food.model';


@Injectable()
export class FoodService {
  foodList: AngularFireList<any>;
  selectedFood: Food = new Food();
  nameFood: string = null;
  item: Observable<{}>;

  constructor(private firebase :AngularFireDatabase) { }
 
  getData(foodType){
    this.foodList = this.firebase.list(foodType);
    return this.foodList;
  }
 
  insertFood(food : Food, typeFood: string, nameFood: string)
  {
    console.log(food);
    this.firebase.object(`${typeFood}/${nameFood}`).set(food);
  }
 
  updateFood(food : Food, typeFood: string, nameFood: string){
    this.firebase.object(`${typeFood}/${nameFood}`).set(food);
  } 
 
  deleteFood($key : string){
    this.foodList.remove($key);
  }

  selectedFoodToEdit(nameFood: string){
    this.nameFood = nameFood;
  }

  getNameFood(){
    return this.nameFood;
  }

}