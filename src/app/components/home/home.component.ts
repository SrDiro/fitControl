import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() tituloComida = new EventEmitter();

  
/* 
  cambiarValorTitulo(value){
    console.log("he llegao | " + value);    
  } */

}
