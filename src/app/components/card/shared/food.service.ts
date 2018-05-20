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
 
  // insertFood(employee : Food)
  // {
  //   this.foodList.push({
  //     name: employee.name,
  //     position: employee.position,
  //     office: employee.office,
  //     salary: employee.salary
  //   });
  // }
 
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