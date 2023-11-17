import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDet1Component } from './service-det1.component';

describe('ServiceDet1Component', () => {
  let component: ServiceDet1Component;
  let fixture: ComponentFixture<ServiceDet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
