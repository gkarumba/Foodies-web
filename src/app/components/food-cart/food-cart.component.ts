import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Menu } from '../../services/menu/menu.model';
import { Item } from '../../services/menu/item';
import { MenuserviceService } from '../../services/menuservice.service';


@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

  private items: Item[] = [];
	private total = 0;

  display(){
    window.alert('Hey, your order has been received. \nYou will  receive a confirmation email shortly ');
    this.items = [];
    this.total = 0;
  }

	constructor(
		private activatedRoute: ActivatedRoute,
		private productService: MenuserviceService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			let id = params.id;
			if (id) {
				let item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};
				if (localStorage.getItem('cart') === null) {
					const cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					const cart: any = JSON.parse(localStorage.getItem('cart'));
					let index = -1;
					for (let i = 0; i < cart.length; i++) {
						const item: Item = JSON.parse(cart[i]);
						if (item.product.id === id) {
							index = i;
							break;
						}
					}
					if (index === -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						const item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem('cart', JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		const cart = JSON.parse(localStorage.getItem('cart'));
		for (let i = 0; i < cart.length; i++) {
			const item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
		}
	}

	remove(id: string): void {
		const cart: any = JSON.parse(localStorage.getItem('cart'));
		const index = -1;
		for (let i = 0; i < cart.length; i++) {
			const item: Item = JSON.parse(cart[i]);
			if (item.product.id === id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		this.loadCart();
	}


}
