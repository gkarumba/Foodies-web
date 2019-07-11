import { TestBed } from '@angular/core/testing';

import { LocationRestaurantService } from './location-restaurant.service';

describe('LocationRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationRestaurantService = TestBed.get(LocationRestaurantService);
    expect(service).toBeTruthy();
  });
});
