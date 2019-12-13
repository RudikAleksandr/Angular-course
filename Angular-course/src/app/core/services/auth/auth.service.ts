import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.model';
import { users } from '../../../../../jsonMockData/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keyUserInLocalStorage = 'user';

  constructor() { }

  public async login(login: string, password: string): Promise<IUser> {
    const user: IUser = users.find((itemUser) => itemUser.login === login && itemUser.password === password);
    if (user) {
      this.saveUserToLocalStorage(user);
      return user;
    }
  }

  public async logout(): Promise<void> {
    this.removeUserInLocalStorage();
  }

  public isAuthenticated(): boolean {
    return !!this.getUserFromLocalStorage();
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
