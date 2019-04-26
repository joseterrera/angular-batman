import { TestBed } from '@angular/core/testing';

import { MovieQueryService } from './movieQuery.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieQueryService = TestBed.get(MovieQueryService);
    expect(service).toBeTruthy();
  });
});
