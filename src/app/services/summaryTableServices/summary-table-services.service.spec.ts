import { TestBed } from '@angular/core/testing';

import { SummaryTableServicesService } from './summary-table-services.service';

describe('SummaryTableServicesService', () => {
  let service: SummaryTableServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaryTableServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
