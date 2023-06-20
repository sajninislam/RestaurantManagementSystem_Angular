import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConviewComponent } from './conview.component';

describe('ConviewComponent', () => {
  let component: ConviewComponent;
  let fixture: ComponentFixture<ConviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
