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

  public handlerClickSubmitBtn(event): void {
    console.log('Submit edited course');
  }

  public handlerClickCancelBtn(): void {
    this.router.navigateByUrl('courses');
  }

}
