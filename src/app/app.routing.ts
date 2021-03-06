import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FoodListComponent } from './components/food/food-list/food-list.component';
import { FoodAddComponent } from './components/food/food-add/food-add.component';
import { FoodEditComponent } from './components/food/food-edit/food-edit.component';
import { DietListComponent } from './components/diet-list/diet-list.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'food-list', component: FoodListComponent},
    {path: 'food-list/:food-type', component: FoodListComponent},
    {path: 'food-add', component: FoodAddComponent},
    {path: 'food-edit', component: FoodEditComponent},
    {path: 'diet-list', component: DietListComponent},
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);