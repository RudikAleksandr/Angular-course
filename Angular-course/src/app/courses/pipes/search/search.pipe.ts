import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(coursesList: ICourse[], searchDate: string): ICourse[] {
    if (searchDate) {
      return coursesList.filter(course => course.title.toLowerCase().includes(searchDate.toLowerCase()));
    }
    return coursesList;
  }

}
