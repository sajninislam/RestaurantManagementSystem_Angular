import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhomebranchComponent } from './viewhomebranch.component';

describe('ViewhomebranchComponent', () => {
  let component: ViewhomebranchComponent;
  let fixture: ComponentFixture<ViewhomebranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhomebranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewhomebranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
