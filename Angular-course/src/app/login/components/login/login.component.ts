import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IToken } from '../../../core/interfaces/token.model';
import { AuthRequest } from 'src/app/core/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string;
  public password: string;

  constructor(
    private store: Store<IToken>
  ) { }

  ngOnInit() {
  }

  public handlerClickLoginBtn(): void {
    this.store.dispatch(AuthRequest({ login: this.login, password: this.password }));
  }
}
