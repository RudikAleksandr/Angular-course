import { ICourse } from '../interfaces/course.model';

export class Course implements ICourse {
    id?: string;
    isTopRated?: boolean;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    authors: string;

    constructor(course: ICourse) {
        this.id = course.id;
        this.title = course.title;
        this.creationDate = course.creationDate;
        this.duration = course.duration;
        this.description = course.description;
        this.authors = course.authors;
        this.isTopRated = course.isTopRated;
    }
}
