import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { ICourse } from '../../interfaces';

@Directive({
  selector: '[appCourseBorderColor]'
})
export class CourseBorderColorDirective {

  @Input('appCourseBorderColor') set borderColor(course: ICourse) {
    const currentDate: Date = new Date();
    const creationDate: Date = new Date(course.creationDate);
    const twoWeeksAgoDate: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 14);
    if (creationDate < currentDate && creationDate >= twoWeeksAgoDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #9BC837');
    }
    if (creationDate > currentDate) {
      this.el.nativeElement.style.border = '2px solid blue';
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
}
