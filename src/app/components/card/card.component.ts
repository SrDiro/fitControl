import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  public foodListType: string;
  public people: any[];

  constructor( private activatedRoute: ActivatedRoute ) { 
    this.foodListType = this.activatedRoute.snapshot.params['food-type'];
    
    this.people = [
      {
        "name": "Cafe solo",
        "image": "http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG16824.png",
        "info":
          {
            "kcal": "453kcal",
            "fat": "24g",
            "carbohydrates": "12g",
            "proteins": "3.9g"
          }
      },
      {
        "name": "Tortita de avena",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFiEQNQLA_XTnXrS7u7FjlLsLO5Gdj7CU90f_y4nGo-9UGdWa",
        "info": {
          "kcal": "453kcal",
          "fat": "24g",
          "carbohydrates": "12g",
          "proteins": "3.9g"
        }
      },
      {
        "name": "Platano",
        "image": "http://www.granini.es/data/images/fruit_images/full/02-pickbestfruit-fruits-big-0002-banana.png",
        "info": {
          "kcal": "453kcal",
          "fat": "24g",
          "carbohydrates": "12g",
          "proteins": "3.9g"
        }
      }
    ];
  }

  ngOnInit() {
  }

}
