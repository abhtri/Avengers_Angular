import { TestBed } from '@angular/core/testing';

import { AvengerServiceService } from './avenger-service.service';

describe('AvengerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvengerServiceService = TestBed.get(AvengerServiceService);
    expect(service).toBeTruthy();
  });
});
