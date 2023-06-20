import { TestBed } from '@angular/core/testing';

import { BangladeshServiceService } from './bangladesh-service.service';

describe('BangladeshServiceService', () => {
  let service: BangladeshServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BangladeshServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
