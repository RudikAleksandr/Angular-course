import { IName } from './../interfaces/name.model';

export interface IUser {
  id: string;
  token: string;
  name: IName;
  login: string;
  password: string;
}
