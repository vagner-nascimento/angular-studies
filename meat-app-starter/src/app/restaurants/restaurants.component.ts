import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestautsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  /*
    NOTES: when you set private or public in a contructor's argument,
    Angular automatically creates a property with it's name and type.
  */
  constructor(private restaurantsService: RestautsService) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants()
                           .subscribe(restaurants => this.restaurants = restaurants)
  }
}
