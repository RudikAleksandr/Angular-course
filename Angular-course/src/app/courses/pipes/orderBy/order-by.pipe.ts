import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../interfaces';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(coursesList: ICourse[], key: string): ICourse[] {
    if (coursesList) {
      coursesList.sort((course1: ICourse, course2: ICourse) => {
        return course1[key] - course2[key];
      });
      return coursesList;
    }
  }

}
