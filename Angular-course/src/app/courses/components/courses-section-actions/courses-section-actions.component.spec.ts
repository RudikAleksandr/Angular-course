import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoursesSectionActionsComponent } from './courses-section-actions.component';

describe('CoursesSectionActionsComponent', () => {
  let component: CoursesSectionActionsComponent;
  let fixture: ComponentFixture<CoursesSectionActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
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

  it('should trigger click on search button', () => {
    spyOn(console, 'log');
    component.searchInputText = 'text';
    const nodeSearchBtn = fixture.debugElement.query(By.css('.courses-section-actions__search-btn'));
    nodeSearchBtn.triggerEventHandler('click', null);
    expect(console.log).toHaveBeenCalledWith('text');
  });
});
