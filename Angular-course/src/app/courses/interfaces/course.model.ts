import { IAuthor } from './author.model';

export interface ICourse {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: IAuthor;
  isTopRated: boolean;
}
