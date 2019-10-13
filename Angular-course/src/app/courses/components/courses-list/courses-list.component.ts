import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input() public coursesList: ICourse[];

  constructor() { }

  ngOnInit() {
  }
}
