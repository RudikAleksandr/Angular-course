import { ICourse } from '../interfaces';

export class Course implements ICourse {
    id: string;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;

    constructor(course: any) {
        this.id = course.id;
        this.title = course.title;
        this.creationDate = course.creationDate;
        this.duration = course.duration;
        this.description = course.description;
    }
}
