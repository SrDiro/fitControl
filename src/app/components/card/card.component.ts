import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{
  public foodListType: string;
  public comida: any;
  public desayuno: any;
  public pruebaObject: any;

  constructor( private activatedRoute: ActivatedRoute ) { 
    this.foodListType = this.activatedRoute.snapshot.params['food-type'];
    
    this.comida = {
      "Arroz con pollo" : {
        "imagen" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Arroz-con-Pollo.jpg/1200px-Arroz-con-Pollo.jpg",
        "info" : {
          "carbohydrates" : "12g",
          "fat" : "24g",
          "kcal" : "453kcal",
          "proteins" : "3.9g"
        }
      }
    };

    this.desayuno = {
      "Cafe solo" : {
        "imagen" : "http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG16824.png",
        "info" : {
          "carbohydrates" : "12g",
          "fat" : "24g",
          "kcal" : "453kcal",
          "proteins" : "3.9g"
        }
      },
      "Platano" : {
        "imagen" : "http://www.granini.es/data/images/fruit_images/full/02-pickbestfruit-fruits-big-0002-banana.png",
        "info" : {
          "carbohydrates" : "12g",
          "fat" : "24g",
          "kcal" : "453kcal",
          "proteins" : "3.9g"
        }
      },
      "Tortita de avena" : {
        "imagen" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFiEQNQLA_XTnXrS7u7FjlLsLO5Gdj7CU90f_y4nGo-9UGdWa",
        "info" : {
          "carbohydrates" : "12g",
          "fat" : "24g",
          "kcal" : "453kcal",
          "proteins" : "3.9g"
        }
      }
    };

    this.pruebaObject = Object.values(this.desayuno);
    console.log(this.pruebaObject);

  }

  ngOnInit() {
  }

}
