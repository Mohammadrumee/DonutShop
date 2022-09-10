import { TestBed } from '@angular/core/testing';

import { DonutShopServiceApiService } from './donut-shop-service-api.service';

describe('DonutShopServiceApiService', () => {
  let service: DonutShopServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutShopServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
