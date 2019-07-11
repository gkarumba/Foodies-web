import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RestaurantService } from '../../services/rests/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _restaurant: RestaurantService) { }
  restaurant = [];

  rest
  locations = []
  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
      });

      this._restaurant.getRestaurant()
      .subscribe(
        res => this.restaurant.push(res),
        err => console.log(err)
      );

  }

}

