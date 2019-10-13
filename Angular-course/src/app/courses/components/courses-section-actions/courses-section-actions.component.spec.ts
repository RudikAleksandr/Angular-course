import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSectionActionsComponent } from './courses-section-actions.component';

describe('CoursesSectionActionsComponent', () => {
  let component: CoursesSectionActionsComponent;
  let fixture: ComponentFixture<CoursesSectionActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSectionActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSectionActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
