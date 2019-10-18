import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements OnInit {
  @Input() public course: ICourse;
  @Output() public clickDeleteButton: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickDeleteButton(): void {
    this.clickDeleteButton.emit(this.course.id);
  }
}
