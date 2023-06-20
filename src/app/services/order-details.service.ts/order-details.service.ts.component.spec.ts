import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsServiceTsComponent } from './order-details.service.ts.component';

describe('OrderDetailsServiceTsComponent', () => {
  let component: OrderDetailsServiceTsComponent;
  let fixture: ComponentFixture<OrderDetailsServiceTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsServiceTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsServiceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
