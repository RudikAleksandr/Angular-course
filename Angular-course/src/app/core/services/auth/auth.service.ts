import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../../enums/routes.enum';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IToken } from '../../interfaces/token.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keyTokenInLocalStorage = 'token';
  private authUser: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private http: HttpClient,
  ) { }

  public login(login: string, password: string): Observable<string> {
    const url = `${Routes.SERVER_URL}${Routes.AUTH_LOGIN}`;
    return this.http.post<IToken>(url, { login, password }).pipe(
      map((data: IToken) => {
        this.saveTokenToLocalStorage(data.token);
        this.authUser.emit();
        return data.token;
      })
    );
  }

  public getUserInfo(): Observable<IUser> {
    const url = `${Routes.SERVER_URL}${Routes.AUTH_USERINFO}`;
    const token = this.getTokenFromLocalStorage();
    return this.http.post<IUser>(url, { token });
  }

  public logout(): void {
    this.removeTokenInLocalStorage();
  }

  public isAuthenticated(): boolean {
    return !!this.getTokenFromLocalStorage();
  }

  public getToken(): string {
    return this.getTokenFromLocalStorage();
  }

  public getAuthUserEmitter(): EventEmitter<void> {
    return this.authUser;
  }

  private saveTokenToLocalStorage(token: string): void {
    localStorage.setItem(this.keyTokenInLocalStorage, token);
  }

  private getTokenFromLocalStorage(): string {
    return localStorage.getItem(this.keyTokenInLocalStorage);
  }

  private removeTokenInLocalStorage(): void {
    localStorage.removeItem(this.keyTokenInLocalStorage);
  }

}
