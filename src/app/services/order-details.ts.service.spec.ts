import { TestBed } from '@angular/core/testing';

import { OrderDetailsTsService } from './order-details.ts.service';

describe('OrderDetailsTsService', () => {
  let service: OrderDetailsTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDetailsTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
