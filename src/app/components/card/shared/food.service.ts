import { Injectable } from '@angular/core';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Food } from './food.model';

@Injectable()
export class FoodService {
  foodList: AngularFireList<any>;
  selectedFood: Food = new Food();
  constructor(private firebase :AngularFireDatabase ) { }
 
  getData(foodType){
    this.foodList = this.firebase.list(foodType);
    return this.foodList;
  }
 
  insertFood(food : Food)
  {
    this.foodList = this.firebase.list('Comida');
    console.log(this.foodList);
    this.foodList.push({
      $key: food.$key,
      imagen: food.$key.image,
      kcal: food.$key.info.kcal,
      fat: food.$key.info.fat,
      carbohydrates: food.$key.info.carbohydrates,
      proteins: food.$key.info.proteins,
    });
  }
 
  // updateFood(employee : Food){
  //   this.foodList.update(employee.$key,
  //     {
  //       name: employee.name,
  //       position: employee.position,
  //       office: employee.office,
  //       salary: employee.salary
  //     });
  // }
 
  // deleteFood($key : string){
  //   this.foodList.remove($key);
  // }
}