import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces';
import { users } from '../../../../../jsonMockData/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keyUserInLocalStorage = 'user';
  private token: string;

  constructor() { }

  public async login(login: string, password: string): Promise<IUser> {
    const user = users.find(itemUser => itemUser.login === login && itemUser.password === password);
    this.saveUserToLocalStorage(user as IUser);
    this.token = user.token;
    return user as IUser;
  }

  public async logout() {
    this.removeUserInLocalStorage();
    this.token = null;
  }

  public isAuthenticated() {
    return !!this.token;
  }

  public async getUserInfo(): Promise<string> {
    const user: IUser = this.getUserFromLocalStorage();
    return user.login;
  }

  private saveUserToLocalStorage(user: IUser): void {
    localStorage.setItem(this.keyUserInLocalStorage, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): IUser {
    const user = JSON.parse(localStorage.getItem(this.keyUserInLocalStorage));
    return user as IUser;
  }

  private removeUserInLocalStorage(): void {
    localStorage.removeItem(this.keyUserInLocalStorage);
  }

}
