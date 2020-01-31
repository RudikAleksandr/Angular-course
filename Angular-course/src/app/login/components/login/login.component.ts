import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthRequest } from 'src/app/core/store/actions/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup;
  public loginControl = new FormControl('', [Validators.required]);
  public passwordControl = new FormControl('', [Validators.required]);

  constructor(
    private store: Store<any>,
    private fb: FormBuilder
    ) {
    this.authForm = this.fb.group({
      login: this.loginControl,
      password: this.passwordControl
    });
  }


  ngOnInit() {
  }

  public get controls(): {[key: string]: AbstractControl} {
    return this.authForm.controls;
  }

  public handlerClickLoginBtn(): void {
    const { login, password } = this.authForm.value;
    this.store.dispatch(AuthRequest({ login, password }));
  }
}
