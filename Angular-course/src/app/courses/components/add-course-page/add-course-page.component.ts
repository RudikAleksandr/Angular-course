import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public handlerClickSubmitButton(event): void {
    console.log('Submit added course');
  }

  public handlerClickCancelButton(): void {
    this.router.navigateByUrl('courses');
  }

}
