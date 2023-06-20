import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderViewListComponent } from './order-view-list.component';

describe('OrderViewListComponent', () => {
  let component: OrderViewListComponent;
  let fixture: ComponentFixture<OrderViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
