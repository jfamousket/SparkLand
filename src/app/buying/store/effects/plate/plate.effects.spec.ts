import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlateEffects } from './plate.effects';

describe('PlateEffects', () => {
  let actions$: Observable<any>;
  let effects: PlateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PlateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
