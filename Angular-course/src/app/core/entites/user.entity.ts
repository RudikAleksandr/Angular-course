import { IUser } from '../interfaces';

export class User implements IUser {
    id: string;
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    token: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.login = user.login;
        this.password = user.password;
        this.token = user.token;
    }
}
