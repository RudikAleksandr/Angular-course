import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../../enums/routes.enum';
import { Observable } from 'rxjs';
import { IToken } from '../../interfaces/token.model';
import { LoadingService } from '../loading/loading.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private store: Store<any>
  ) {
    this.store
    .select(state => state.auth.token)
    .subscribe((token) => {
      this.token = token;
    });
   }

  public login(login: string, password: string): Observable<IToken> {
    const url = `${Routes.SERVER_URL}${Routes.AUTH_LOGIN}`;
    this.loadingService.setLoading(true);
    return this.http.post<IToken>(url, { login, password });
  }

  public getUserInfo(): Observable<IUser> {
    const url = `${Routes.SERVER_URL}${Routes.AUTH_USERINFO}`;
    const token = this.getToken();
    this.loadingService.setLoading(true);
    return this.http.post<IUser>(url, { token });
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public getToken(): string {
    return this.token;
  }
}
