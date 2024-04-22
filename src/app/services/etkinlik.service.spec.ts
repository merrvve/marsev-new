import { TestBed } from '@angular/core/testing';

import { EtkinlikService } from './etkinlik.service';

describe('EtkinlikService', () => {
  let service: EtkinlikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtkinlikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
