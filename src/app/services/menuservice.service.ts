import { Injectable } from '@angular/core';
import { Menu } from '../services/menu/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {
  private menus: Menu[];

  constructor() {
    this.menus = [
      {id: '1', name: 'Sandwich', category:'breakfast', description:'Cheese, ham and lettuce', price: 650 },
      {id: '2', name: 'Burger', category:'breakfast', description:'Chicken, cheese and vegies', price: 550 },
      {id: '3', name: 'Pizza', category:'lunch', description:'Italian special', price: 452 },
      {id: '4', name: 'Chips', category:'lunch', description:'Masala fries', price: 200 },
      {id: '5', name: 'Chapati', category:'dinner', description:'Topped with vegies', price: 100 },
      {id: '6', name: 'Rice', category:'dinner', description:'Chinese fried rice', price: 150 },
    ];
   }

  findAll(): Menu[] {
    return this.menus;
}

  find(id: string): Menu {
      return this.menus[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
      for (var i = 0; i < this.menus.length; i++) {
          if (this.menus[i].id === id) {
              return i;
          }
      }
      return -1;
  }


}
