import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces';
import { users } from '../../../../../jsonMockData/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keyUserInLocalStorage = 'user';
  private isAuth = false;

  constructor() { }

  public async login(login: string, password: string): Promise<IUser> {
    const user = users.find(itemUser => itemUser.login === login && itemUser.password === password);
    if (user) {
      this.isAuth = true;
      this.saveUserToLocalStorage(user as IUser);
      return user as IUser;
    }
  }

  public async logout() {
    this.removeUserInLocalStorage();
    this.isAuth = false;
  }

  public isAuthenticated(): boolean {
    return this.isAuth;
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
