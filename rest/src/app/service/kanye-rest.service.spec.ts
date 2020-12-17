import { TestBed } from '@angular/core/testing';

import { KanyeRestService } from './kanye-rest.service';

describe('KanyeRestService', () => {
  let service: KanyeRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanyeRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
