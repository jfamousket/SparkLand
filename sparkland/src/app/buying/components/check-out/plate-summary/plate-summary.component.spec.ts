import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateSummaryComponent } from './plate-summary.component';

describe('PlateSummaryComponent', () => {
  let component: PlateSummaryComponent;
  let fixture: ComponentFixture<PlateSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
