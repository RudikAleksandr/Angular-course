import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Output() public clickSubmitButton: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  @Output() public clickCancelButton: EventEmitter<void> = new EventEmitter<void>();
  public title: string;
  public description: string;
  public creationDate: string;
  public duration: number;
  public authors: string;

  constructor() { }

  ngOnInit() {
  }

  public handlerClickSubmitBtn(): void {
    this.clickSubmitButton.emit({
      title: this.title,
      description: this.description,
      creationDate: this.creationDate,
      duration: this.duration,
      authors: this.authors
    });
  }

  public handlerClickCancelBtn(): void {
    this.clickCancelButton.emit();
  }

}
