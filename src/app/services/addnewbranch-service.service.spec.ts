import { TestBed } from '@angular/core/testing';

import { AddnewbranchServiceService } from './addnewbranch-service.service';

describe('AddnewbranchServiceService', () => {
  let service: AddnewbranchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewbranchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
