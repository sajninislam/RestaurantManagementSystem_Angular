import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllOrderListComponent } from './view-all-order-list.component';

describe('ViewAllOrderListComponent', () => {
  let component: ViewAllOrderListComponent;
  let fixture: ComponentFixture<ViewAllOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllOrderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
