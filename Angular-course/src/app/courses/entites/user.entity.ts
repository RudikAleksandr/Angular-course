import { IUser } from '../interfaces';

export class User implements IUser {
    id: string;
    firstName: string;
    lastName: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }
}
