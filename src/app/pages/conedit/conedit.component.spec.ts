import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConeditComponent } from './conedit.component';

describe('ConeditComponent', () => {
  let component: ConeditComponent;
  let fixture: ComponentFixture<ConeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
