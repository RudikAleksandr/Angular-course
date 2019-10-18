import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-section-actions',
  templateUrl: './courses-section-actions.component.html',
  styleUrls: ['./courses-section-actions.component.scss']
})
export class CoursesSectionActionsComponent implements OnInit {
  public searchInputText: string;

  constructor() { }

  ngOnInit() {
  }

  onClickSearchButton(): void {
    console.log(this.searchInputText);
  }
}
