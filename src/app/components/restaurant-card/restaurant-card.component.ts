import {
  Component,
  OnInit
} from '@angular/core';
import {
  RestaurantService
} from '../../services/rests/restaurant.service';
import {
  ActivatedRoute
} from '@angular/router'

@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})

export class RestaurantCardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _restaurant: RestaurantService) {}

  restaurant = [];

  rest
  restrnts
  locations=[]
  locationSet


  ngOnInit() {
    // console.log(this.restaurant);
    this._restaurant.getRestaurant()
      .subscribe(
        res => this.restaurant.push(res),
        err => console.log(err)
      );

    this.route.paramMap
      .subscribe(params => {
        console.log(params);
      });
  }

  getRest() {
    this.rest = this.restaurant[0].data;
    console.log(this.restaurant[0].data);
    this.restrnts = this.rest.slice(1, 6);
    console.log(this.restrnts)
    for (var i =0; i<this.rest.length; i++){
      this.locations.push(this.rest[i].location);
    }
    this.locationSet = new Set(this.locations);
    console.log(this.locationSet);
    this.locationSet.forEach(function(item){
          this.locations.push(item)
      });
      console.log("List");
      console.log(this.locations);

  }
}
