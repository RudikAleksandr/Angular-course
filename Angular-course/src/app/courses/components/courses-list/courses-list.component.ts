import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input() public coursesList: ICourse[];
  @Output() public clickDeleteButton: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handlerClickDeleteButton(idCourse: string): void {
    this.clickDeleteButton.emit(idCourse);
  }
}
