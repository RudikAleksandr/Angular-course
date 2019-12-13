import { IUser } from '../interfaces/user.model';
import { IName } from '../interfaces/name.model';

export class User implements IUser {
    id: string;
    token: string;
    name: IName;
    login: string;
    password: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.token = user.token;
        this.name = user.name;
        this.login = user.login;
        this.password = user.password;
    }
}
