import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDet1Component } from './team-det1.component';

describe('TeamDet1Component', () => {
  let component: TeamDet1Component;
  let fixture: ComponentFixture<TeamDet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamDet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
