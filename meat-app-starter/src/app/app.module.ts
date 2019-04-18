import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import{ FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestautsService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    MenuComponent,
    ReviewsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES), //NOTES: It defines the array with root created in 'app/app.routes.ts'
    FormsModule //NOTES FORMS MODULE: It is necessary to use the directive ngModule, used in form's validations
  ],
  //NOTES: 'providers' makes the DEPENDENCY INJECTION, then you going to able to use this class without instantiating it every time.
  //NOTES: {provide: &Resource, useValue: &Source} is a extended way to declare providers
  //  when you declare just calling interface, it mades, behind the scenes, the same thing:
  //  {provide: RestautsService, useClass: RestautsService}
  //NOTES: setting LOCALE_ID as provider makes that Angular provide this token with setted value every time when some resource uses it.
  providers: [RestautsService, ShoppingCartService, {provide: LOCALE_ID, useValue: "pt-BR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
