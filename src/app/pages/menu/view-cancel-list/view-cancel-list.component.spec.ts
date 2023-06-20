import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCancelListComponent } from './view-cancel-list.component';

describe('ViewCancelListComponent', () => {
  let component: ViewCancelListComponent;
  let fixture: ComponentFixture<ViewCancelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCancelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCancelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
