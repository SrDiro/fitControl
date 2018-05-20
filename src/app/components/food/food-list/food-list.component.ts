import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  public foodListType: string;
  public title: string;

  constructor( private activatedRoute: ActivatedRoute ) {
    this.foodListType = this.activatedRoute.snapshot.params['food-type'];
    
    switch(this.foodListType){
      case 'breakfast':
        this.title = 'Desayuno';      
      break;
      case 'branch':
        this.title = 'Almuerzo';      
      break;
      case 'lunch':
        this.title = 'Comida';      
      break;
      case 'afternoon-snack':
        this.title = 'Merienda';      
      break;
      case 'dinner':
        this.title = 'Cena';      
      break;
    }    
  }

  getTitle(){    
    return this.title;
  }

  ngOnInit() {
  }

}
