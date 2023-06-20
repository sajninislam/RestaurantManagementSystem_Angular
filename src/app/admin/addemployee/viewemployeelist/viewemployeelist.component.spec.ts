import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeelistComponent } from './viewemployeelist.component';

describe('ViewemployeelistComponent', () => {
  let component: ViewemployeelistComponent;
  let fixture: ComponentFixture<ViewemployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemployeelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
