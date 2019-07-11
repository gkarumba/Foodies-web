import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestLocationComponent } from './rest-location.component';

describe('RestLocationComponent', () => {
  let component: RestLocationComponent;
  let fixture: ComponentFixture<RestLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
