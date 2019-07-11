import { Component, OnInit } from '@angular/core';
import { LocationRestaurantService } from '../../services/rests/location-restaurant.service';

@Component({
  selector: 'rest-location',
  templateUrl: './rest-location.component.html',
  styleUrls: ['./rest-location.component.css']
})
export class RestLocationComponent implements OnInit {

  constructor(private _restaurant: LocationRestaurantService) { }

  restaurant = [];

  rest

  ngOnInit() {
    // console.log(this.restaurant);
    this._restaurant.getRestaurant()
      .subscribe(
        res => this.restaurant.push(res),
        err => console.log(err)
      );
  }

  getRest() {
    this.rest = this.restaurant[0].data;
    console.log(this.restaurant[0].data);
  }

}
