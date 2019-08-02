import { TestBed } from '@angular/core/testing';

import { ArttistListContainerService } from './arttist-list-container.service';

describe('ArttistListContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArttistListContainerService = TestBed.get(ArttistListContainerService);
    expect(service).toBeTruthy();
  });
});
