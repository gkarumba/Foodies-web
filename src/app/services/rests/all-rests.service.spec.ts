import { TestBed } from '@angular/core/testing';

import { AllRestsService } from './all-rests.service';

describe('AllRestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllRestsService = TestBed.get(AllRestsService);
    expect(service).toBeTruthy();
  });
});
