import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestComponent } from './components/rest/rest.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminCuisinesComponent } from './components/admin/admin-cuisines/admin-cuisines.component';
import { FoodCartComponent } from './components/food-cart/food-cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { SuperAdminComponent } from './components/super-admin/super-admin.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantService } from './services/rests/restaurant.service';
import { LocationRestaurantService } from './services/rests/location-restaurant.service';
import { RestLocationComponent } from './components/rest-location/rest-location.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantsComponent,
    RestComponent,
    MyordersComponent,
    LoginComponent,
    OrderSuccessComponent,
    AdminOrdersComponent,
    AdminCuisinesComponent,
    FoodCartComponent,
    NavbarComponent,
    SignupComponent,
    SuperAdminComponent,
    RestaurantCardComponent,
    FooterComponent,
    RestLocationComponent,
    ReviewsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'restaurant-list/:location', component: RestaurantsComponent},
      { path: 'restaurant/:id', component: RestComponent},
      { path: 'foodcart', component: FoodCartComponent},
      { path: 'order-success', component: OrderSuccessComponent},
      { path: 'orders', component: MyordersComponent},
      { path: 'admin/menu', component: AdminCuisinesComponent},
      { path: 'admin/orders', component: AdminOrdersComponent},
      { path: 'login', component: LoginComponent},
      { path: 'sign-up', component: SignupComponent},
      { path: 'super-admin', component: SuperAdminComponent},
      { path: 'restaurant/location/Upperhill', component: RestLocationComponent}
    ])
  ],
  providers: [RestaurantService, LocationRestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
