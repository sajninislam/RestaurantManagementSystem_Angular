import { TestBed } from '@angular/core/testing';

import { FilterPipeService } from './filter.pipe.service';

describe('FilterPipeService', () => {
  let service: FilterPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
