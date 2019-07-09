import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../restaurants/restaurant.model';

}
@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})



export class QuoteComponent implements OnInit {
  quotes = [
    new Restaurant(1, 'Java','CBD', 'https://d1ralsognjng37.cloudfront.net/d5a447f5-87bc-453e-89a6-a137474e0015'),
    new Restaurant(2, 'Urban Gormet', "Ngong' Road", 'https://d1ralsognjng37.cloudfront.net/d5a447f5-87bc-453e-89a6-a137474e0015'),
    new Restaurant(3, 'KFC', 'CBD', 'https://d1ralsognjng37.cloudfront.net/d5a447f5-87bc-453e-89a6-a137474e0015'),
    new Restaurant(4, 'Wimpy', 'Upperhill', 'https://d1ralsognjng37.cloudfront.net/d5a447f5-87bc-453e-89a6-a137474e0015'),
    new Restaurant(5, "Moody's Restaurant", 'Upperhill', 'https://d1ralsognjng37.cloudfront.net/d5a447f5-87bc-453e-89a6-a137474e0015'),
    new Restaurant(6, "Kaldhi'S Restaurant", "Ngong' Road", 'https://d1ralsognjng37.cloudfront.net/d5a447f5-87bc-453e-89a6-a137474e0015')
  ]
  ngOnInit() {}

}
