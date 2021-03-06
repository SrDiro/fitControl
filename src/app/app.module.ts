import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { FoodListComponent } from './components/food/food-list/food-list.component';
import { CardComponent } from './components/card/card.component';
import { FloatingIconsComponent } from './components/floating-icons/floating-icons.component';
import { DietListComponent } from './components/diet-list/diet-list.component';
import { FormsModule }   from '@angular/forms';

// Dependencias de firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FoodAddComponent } from './components/food/food-add/food-add.component';
import { FoodEditComponent } from './components/food/food-edit/food-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TitleComponent,
    FoodListComponent,
    CardComponent,
    FloatingIconsComponent,
    DietListComponent,
    FoodAddComponent,
    FoodEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    FoodListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
