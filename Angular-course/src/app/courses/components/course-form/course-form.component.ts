import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Output() public clickSubmitButton: EventEmitter<string> = new EventEmitter<string>();
  @Output() public clickCancelButton: EventEmitter<string> = new EventEmitter<string>();
  public title: string;
  public description: string;
  public date: string;
  public duration: number;
  public authors: string;

  constructor() { }

  ngOnInit() {
  }

  public handlerClickSubmitBtn(): void {
    this.clickSubmitButton.emit('fg');
  }

  public handlerClickCancelBtn(): void {
    this.clickCancelButton.emit();
  }

}
