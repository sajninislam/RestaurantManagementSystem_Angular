import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveredListComponent } from './order-delivered-list.component';

describe('OrderDeliveredListComponent', () => {
  let component: OrderDeliveredListComponent;
  let fixture: ComponentFixture<OrderDeliveredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDeliveredListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDeliveredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
