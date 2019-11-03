import { ICourse } from '../interfaces';

export class Course implements ICourse {
    id: string;
    title: string;
    creationDate: string;
    duration: number;
    description: string;

    constructor(course: ICourse) {
        this.id = course.id;
        this.title = course.title;
        this.creationDate = course.creationDate;
        this.duration = course.duration;
        this.description = course.description;
    }
}
