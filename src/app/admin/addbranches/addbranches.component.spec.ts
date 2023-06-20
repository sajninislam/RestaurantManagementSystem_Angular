import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbranchesComponent } from './addbranches.component';

describe('AddbranchesComponent', () => {
  let component: AddbranchesComponent;
  let fixture: ComponentFixture<AddbranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
