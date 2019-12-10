import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesItemComponent implements OnInit {
  @Input() public course: ICourse;
  @Output() public clickDeleteButton: EventEmitter<string> = new EventEmitter<string>();
  @Output() public clickEditButton: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  public handlerClickEditBtn(): void {
    this.clickEditButton.emit(this.course.id);
  }

  public handlerClickDeleteBtn(): void {
    this.clickDeleteButton.emit(this.course.id);
  }
}
