import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";

export const ROUTES: Routes = [
    {path: "", component: HomeComponent},
    {path: "restaurants", component: RestaurantsComponent},
    //NOTES: Declared a parametrized route passing the route path and id (path/:id). Must to use : to pass a parameter
    {path: "restaurants/:id", component: RestaurantDetailComponent}, 
    {path: "about", component: AboutComponent}
]