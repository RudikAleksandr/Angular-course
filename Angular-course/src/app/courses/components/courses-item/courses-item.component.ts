import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements OnInit {
  @Input() public course: ICourse;

  constructor() { }

  ngOnInit() {
  }

}
