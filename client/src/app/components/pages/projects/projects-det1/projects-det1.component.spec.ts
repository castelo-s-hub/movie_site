import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDet1Component } from './projects-det1.component';

describe('ProjectsDet1Component', () => {
  let component: ProjectsDet1Component;
  let fixture: ComponentFixture<ProjectsDet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsDet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
