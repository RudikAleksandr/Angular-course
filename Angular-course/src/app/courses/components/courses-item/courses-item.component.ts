import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() public course: ICourse;
  @Output() public clickDeleteButton: EventEmitter<string> = new EventEmitter<string>();

  constructor() { console.log('constructor'); }

  ngOnInit() { console.log('OnInit'); }
  ngOnChanges() { console.log('OnChanges'); }
  ngAfterContentInit() { console.log('OnChanges'); }
  ngAfterContentChecked() { console.log('OnChanges'); }
  ngAfterViewInit() { console.log('OnChanges'); }
  ngAfterViewChecked() { console.log('OnChanges'); }
  ngOnDestroy() { console.log('OnChanges'); }

  onClickDeleteButton(): void {
    this.clickDeleteButton.emit(this.course.id);
  }
}
