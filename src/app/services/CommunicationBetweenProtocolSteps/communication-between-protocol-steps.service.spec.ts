import { TestBed } from '@angular/core/testing';

import { CommunicationBetweenProtocolStepsService } from './communication-between-protocol-steps.service';

describe('CommunicationBetweenProtocolStepsService', () => {
  let service: CommunicationBetweenProtocolStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationBetweenProtocolStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
