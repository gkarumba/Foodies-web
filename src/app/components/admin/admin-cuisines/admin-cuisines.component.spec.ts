import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCuisinesComponent } from './admin-cuisines.component';

describe('AdminCuisinesComponent', () => {
  let component: AdminCuisinesComponent;
  let fixture: ComponentFixture<AdminCuisinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCuisinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCuisinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
