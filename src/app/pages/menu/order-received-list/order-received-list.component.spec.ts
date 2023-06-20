import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReceivedListComponent } from './order-received-list.component';

describe('OrderReceivedListComponent', () => {
  let component: OrderReceivedListComponent;
  let fixture: ComponentFixture<OrderReceivedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReceivedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderReceivedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
