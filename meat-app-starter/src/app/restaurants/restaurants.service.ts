import { OnInit, Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map' //NOTE: Is necessary to declare it manually to use ".map" to get response JSON

@Injectable() //NOTE: That is necessary for angular make depency injection of Http "Rest Client" (a piece a cacke)
export class RestautsService implements OnInit {
    
    constructor(private http: Http) {}

    ngOnInit(): void {
    }

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
                        .map(response => response.json())
    }
}