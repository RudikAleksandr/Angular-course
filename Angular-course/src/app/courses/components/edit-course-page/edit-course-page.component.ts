import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.scss']
})
export class EditCoursePageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public handlerClickSubmitButton(event): void {
    console.log('Submit edited course');
  }

  public handlerClickCancelButton(): void {
    this.router.navigateByUrl('courses');
  }

}
