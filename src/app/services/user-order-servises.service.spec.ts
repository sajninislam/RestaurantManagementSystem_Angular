import { TestBed } from '@angular/core/testing';

import { UserOrderServisesService } from './user-order-servises.service';

describe('UserOrderServisesService', () => {
  let service: UserOrderServisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserOrderServisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
