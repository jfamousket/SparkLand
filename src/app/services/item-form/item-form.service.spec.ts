import { TestBed, inject } from '@angular/core/testing';

import { BuyFormService } from './item-form.service';

describe('BuyFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyFormService]
    });
  });

  it('should be created', inject([BuyFormService], (service: BuyFormService) => {
    expect(service).toBeTruthy();
  }));
});
