import { TestBed } from '@angular/core/testing';

import { SearchRequestService } from './search-request-service.service';

describe('SearchRequestService', () => {
  let service: SearchRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
