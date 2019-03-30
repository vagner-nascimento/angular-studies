import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";

export const ROUTES: Routes = [
    {path: "", component: HomeComponent},
    {path: "restaurants", component: RestaurantsComponent},
    //NOTES: Declared a parametrized route passing the route path and id (path/:id). Must to use : to pass a parameter
    {path: "restaurants/:id", component: RestaurantDetailComponent,
        children: [ //Added children to create children menus to the restaurant detail route
            {path: "", redirectTo: "menu", pathMatch: "full"},//Added empty path to redirect to menu path when none id was sended. This a default path for this route
            {path: "menu", component: MenuComponent},
            {path: "reviews", component: ReviewsComponent}
        ]
    }, 
    {path: "about", component: AboutComponent}
]