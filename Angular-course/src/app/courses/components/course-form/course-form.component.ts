import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ICourse } from '../../interfaces/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() course: ICourse;
  @Output() public clickSubmitBtn: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  @Output() public clickCancelBtn: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public handlerClickSubmitBtn(): void {
    this.clickSubmitBtn.emit(this.course);
  }

  public handlerClickCancelBtn(): void {
    this.clickCancelBtn.emit();
  }

}
