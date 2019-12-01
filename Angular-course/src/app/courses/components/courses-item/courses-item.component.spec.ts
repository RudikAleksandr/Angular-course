import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoursesItemComponent } from './courses-item.component';
import { ICourse } from '../../interfaces/course.model';

describe('CoursesItemComponent', () => {
  let component: CoursesItemComponent;
  let fixture: ComponentFixture<CoursesItemComponent>;

  const mockCourse: ICourse = {
    id: '1',
    title: 'Angular',
    creationDate: new Date(2019, 5, 15).toString(),
    duration: 60,
    description: 'description',
    isTopRated: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should view course data', () => {
    const nodeTitleLink = fixture.debugElement.query(By.css('.courses-item__title-link')).nativeElement;
    const nodeDuration = fixture.debugElement.query(By.css('.courses-item__time')).nativeElement;
    const nodeCreationDate = fixture.debugElement.query(By.css('.courses-item__date')).nativeElement;
    const nodeDescription = fixture.debugElement.query(By.css('.courses-item___description')).nativeElement;

    expect(nodeTitleLink.textContent).toBe('Angular');
    expect(nodeDuration.textContent).toBe('60 min');
    expect(nodeCreationDate.textContent).toBe('15 Jun 2019');
    expect(nodeDescription.textContent).toBe('description');
  });

  it('should emit delete course with id', () => {
    spyOn(component.clickDeleteButton, 'emit');
    const nodeDeleteBtn = fixture.debugElement.query(By.css('.courses-item___delete-btn'));
    nodeDeleteBtn.triggerEventHandler('click', null);
    expect(component.clickDeleteButton.emit).toHaveBeenCalledWith('1');
  });
});
