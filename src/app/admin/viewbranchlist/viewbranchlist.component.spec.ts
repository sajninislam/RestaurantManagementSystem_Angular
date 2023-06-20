import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbranchlistComponent } from './viewbranchlist.component';

describe('ViewbranchlistComponent', () => {
  let component: ViewbranchlistComponent;
  let fixture: ComponentFixture<ViewbranchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbranchlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbranchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
