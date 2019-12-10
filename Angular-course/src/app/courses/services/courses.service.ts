import { Injectable } from '@angular/core';
import { ICourse } from '../interfaces';
import { coursesList } from 'jsonMockData/coursesList';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public async getCourses(): Promise<ICourse[]> {
    return coursesList as ICourse[];
  }

  public async createCourse(course: ICourse): Promise<void> {
    coursesList.push(course);
  }

  public async getCourseById(id: string): Promise<ICourse> {
    const foundCourse: object = coursesList.find((itemCourse: ICourse) => itemCourse.id === id);
    return foundCourse as ICourse;
  }

  public async updateCourse(course: ICourse): Promise<void> {
    const indexCourse: number = coursesList.findIndex((itemCourse: ICourse) => itemCourse.id === course.id);
    coursesList[indexCourse] = course;
  }

  public async removeCourse(id: string): Promise<void> {
    const indexCourse = coursesList.findIndex((itemCourse: ICourse) => itemCourse.id === id);
    coursesList.splice(indexCourse, 1);
  }
}
