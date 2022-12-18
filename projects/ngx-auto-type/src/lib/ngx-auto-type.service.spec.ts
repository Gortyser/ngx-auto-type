import { TestBed } from '@angular/core/testing';

import { NgxAutoTypeService } from './ngx-auto-type.service';

describe('NgxAutoTypeService', () => {
  let service: NgxAutoTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAutoTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
