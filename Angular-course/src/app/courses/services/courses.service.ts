import { Injectable } from '@angular/core';
import { ICourse } from '../interfaces';
import { coursesList } from 'jsonMockData/coursesList';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public getCourses(): Promise<ICourse[]> {
    return Promise.resolve(coursesList as ICourse[]);
  }

  public createCourse(course: ICourse): void {
    Promise.resolve(course).then((data) => {
      coursesList.push(data);
    });
  }

  public getCourseById(id: string): Promise<ICourse> {
    const foundCourse: object = coursesList.find((itemCourse: ICourse) => itemCourse.id === id);
    return Promise.resolve(foundCourse as ICourse);
  }

  public updateCourse(course: ICourse): void {
    const indexCourse: number = coursesList.findIndex((itemCourse: ICourse) => itemCourse.id === course.id);
    coursesList[indexCourse] = course;
  }

  public removeCourse(id: string): void {
    const indexCourse = coursesList.findIndex((itemCourse: ICourse) => itemCourse.id === id);
    coursesList.splice(indexCourse, 1);
  }
}
