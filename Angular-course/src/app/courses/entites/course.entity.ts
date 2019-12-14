import { ICourse } from '../interfaces/course.model';
import { IAuthor } from '../interfaces/author.model';

export class Course implements ICourse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: IAuthor;
    isTopRated: boolean;

    constructor(course: ICourse) {
        this.id = course.id;
        this.name = course.name;
        this.date = course.date;
        this.length = course.length;
        this.description = course.description;
        this.authors = course.authors;
        this.isTopRated = course.isTopRated;
    }
}
