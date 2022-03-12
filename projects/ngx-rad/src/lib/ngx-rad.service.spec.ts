import { TestBed } from '@angular/core/testing';

import { NgxRADService } from './ngx-rad.service';

describe('NgxRADService', () => {
  let service: NgxRADService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRADService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
