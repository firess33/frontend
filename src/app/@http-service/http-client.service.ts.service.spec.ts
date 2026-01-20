import { TestBed } from '@angular/core/testing';

import { HttpClientServiceTsService } from './http-client.service.ts.service';

describe('HttpClientServiceTsService', () => {
  let service: HttpClientServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
