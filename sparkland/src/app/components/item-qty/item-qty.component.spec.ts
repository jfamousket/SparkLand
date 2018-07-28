import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQtyComponent } from './item-qty.component';

describe('ItemQtyComponent', () => {
  let component: ItemQtyComponent;
  let fixture: ComponentFixture<ItemQtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemQtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
