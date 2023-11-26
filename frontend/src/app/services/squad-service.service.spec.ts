import { TestBed } from '@angular/core/testing';

import { SquadServiceService } from './squad-service.service';

describe('SquadServiceService', () => {
  let service: SquadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
