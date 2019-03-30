import { OnInit, Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "app/app.error-handler"
import 'rxjs/add/operator/map' //NOTE: Is necessary to declare it manually to use ".map" to get response JSON
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable() //NOTE: That is necessary for angular make depency injection of Http "Rest Client" (a piece a cacke)
export class RestautsService implements OnInit {
    
    constructor(private http: Http) {}

    ngOnInit(): void {
    }
    //NOTE: getRestaurants mothod dosen't call the api, 
    //  it only configures the observable to who's calls him, 
    //  so the caller does the subscrible and manipules the response as his needs
    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
                        .map(response => response.json())
                        //NOTE: catch is used to call a static function created in the default error handler, it pass a Response through the static function, that recieves and handles it
                        .catch(ErrorHandler.handleError)
    }

    getRestaurantsByid(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }
}