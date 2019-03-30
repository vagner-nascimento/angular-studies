import { Component, OnInit } from '@angular/core';
import { RestautsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestautsService,
    private route: ActivatedRoute) { } //NOTES: ActivatedRoute gives an object with all active routes in curent applicaton

  ngOnInit() {
    /*Taking the parameter from the rout using SNAPSHOT method and calling the parameter passing the name setted on the 
      routerLink on the file restaurant-component.html
    */
    this.restaurantsService.getRestaurantsByid(this.route.snapshot.params["id"])
      .subscribe(restaurant => this.restaurant = restaurant)
  }
}
