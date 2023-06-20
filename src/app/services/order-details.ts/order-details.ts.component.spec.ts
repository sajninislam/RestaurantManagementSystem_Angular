import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsTsComponent } from './order-details.ts.component';

describe('OrderDetailsTsComponent', () => {
  let component: OrderDetailsTsComponent;
  let fixture: ComponentFixture<OrderDetailsTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
