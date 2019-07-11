import { Review } from './../../services/reviews/reviews.model';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Menu } from '../../services/menu/menu.model';
import { Information } from '../../services/information/information.model';
import { Recipe } from '../../services/recipes/recipes.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

information = [
  new Information(1,' 8:30', '22:00', 'we sell home cooked meals', "Ngong' Rd",'0725489789')
  ]

  menu = [
    new Menu(1, 'Sandwich','breakfast','Maize flour and water', 650),
    new Menu(2, 'Burger','breakfast', "Wheat flour and meat", 550),
    new Menu(3, 'Pizza', 'lunch','Bread with things', 452),
    new Menu(4, 'Chips', 'lunch','Fried potato', 130),
    new Menu(5, "Chapati",'supper', 'Wheat pankakes without eggs and milk', 200),
    new Menu(6, "Rice",'supper', 'Rice cereals', 350)
    ]

  reviews = [
    new Review(1, 'It was okay food',3, '12:30pm 8/7/2019', 'Pizza Inn', 'Messi'),
    new Review(2, 'It was okay rice',4, '12:30pm 8/7/2019', 'Steers', 'Iniesta'),
    new Review(3, 'It was okay pizza',4, '12:30pm 8/7/2019', 'Debonairs', 'Mbappe'),
    new Review(4, 'It was okay dawa',2, '12:30pm 8/7/2019', 'Java', 'Lugaga'),
    new Review(5, 'It was okay coffee',1, '12:30pm 8/7/2019', 'Dormans', 'Rakitic')
    ]
    hideRs = true;
    hideMR1 = false;
    hideMR2 = false;

    Menu(){
      this.hideRs = true;
      this.hideMR1 = false;
      this.hideMR2 = false;
    }
    Reviews(){
      this.hideRs = false;
      this.hideMR1 = true;
      this.hideMR2 = false;    }
    Recipe(){
      this.hideRs = false;
      this.hideMR1 = false;
      this.hideMR2= true;    }


  ngOnInit() {
  }




}


