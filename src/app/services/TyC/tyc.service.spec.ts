import { TestBed } from '@angular/core/testing';

import { TycService } from './tyc.service';

describe('TycService', () => {
  let service: TycService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TycService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
