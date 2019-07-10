import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../restaurants/restaurant.model';


@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})

export class RestaurantCardComponent {
  restaurants = [
    new Restaurant(1, 'Java','CBD', 'https://www.celadonnapa.com/wp-content/uploads/2015/02/celadon-food.jpg'),
    new Restaurant(2, 'Urban Gormet', "Ngong' Road", 'https://www.celadonnapa.com/wp-content/uploads/2015/02/celadon-food.jpg'),
    new Restaurant(3, 'KFC', 'CBD', 'https://www.celadonnapa.com/wp-content/uploads/2015/02/celadon-food.jpg'),
    new Restaurant(4, 'Wimpy', 'Upperhill', 'https://www.celadonnapa.com/wp-content/uploads/2015/02/celadon-food.jpg'),
    new Restaurant(5, "Moody's Restaurant", 'Upperhill', 'https://www.celadonnapa.com/wp-content/uploads/2015/02/celadon-food.jpg')
    ]


}
