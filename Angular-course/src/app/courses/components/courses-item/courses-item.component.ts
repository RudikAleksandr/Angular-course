import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { ICourse } from '../../interfaces/course.model';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesItemComponent implements OnInit {
  @Input() public course: ICourse;
  @Output() public clickEditButton: EventEmitter<number> = new EventEmitter<number>();
  @Output() public clickDeleteButton: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  public handlerClickEditBtn(): void {
    this.clickEditButton.emit(this.course.id);
  }

  public handlerClickDeleteBtn(): void {
    this.clickDeleteButton.emit(this.course.id);
  }
}
