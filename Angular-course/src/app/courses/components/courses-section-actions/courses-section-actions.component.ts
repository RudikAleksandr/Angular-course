import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/core/enums/routes.enum';
import { Subject } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-courses-section-actions',
  templateUrl: './courses-section-actions.component.html',
  styleUrls: ['./courses-section-actions.component.scss']
})
export class CoursesSectionActionsComponent implements OnInit {
  @Output() public changeSearchText: EventEmitter<string> = new EventEmitter<string>();
  public searchSubject$: Subject<string> = new Subject();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.subscribeSearchSubject();
  }

  private subscribeSearchSubject(): void {
    this.searchSubject$.pipe(
      debounceTime(300),
      filter((text: string) => text.length >= 3 || !text.length)
    ).subscribe((text: string) => {
      this.changeSearchText.emit(text);
    });
  }

  public handlerClickAddBtn(): void {
    this.router.navigateByUrl(Routes.COURSES_NEW);
  }

  public handlerChangeSearchText(text): void {
    this.searchSubject$.next(text);
  }
}
