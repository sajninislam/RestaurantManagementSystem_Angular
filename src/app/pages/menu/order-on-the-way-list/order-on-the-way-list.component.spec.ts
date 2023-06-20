import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOnTheWayListComponent } from './order-on-the-way-list.component';

describe('OrderOnTheWayListComponent', () => {
  let component: OrderOnTheWayListComponent;
  let fixture: ComponentFixture<OrderOnTheWayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOnTheWayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderOnTheWayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
