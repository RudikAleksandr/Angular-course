import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-section-actions',
  templateUrl: './courses-section-actions.component.html',
  styleUrls: ['./courses-section-actions.component.scss']
})
export class CoursesSectionActionsComponent implements OnInit {
  @Output() public clickSearchButton: EventEmitter<string> = new EventEmitter<string>();
  public searchInputText: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onClickSearchButton(): void {
    this.clickSearchButton.emit(this.searchInputText);
  }

  public onClickAddButton(): void {
    this.router.navigateByUrl('courses/new');
  }
}
