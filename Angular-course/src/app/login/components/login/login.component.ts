import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth-service.service';
import { IUser } from 'src/app/core/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string;
  public password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onClickLoginButton(): void {
    this.authService.login(this.login, this.password).then((user: IUser) => {
      if (user) {
        this.router.navigate(['/courses']);
        console.log('logged in successfully');
      }
    });
  }
}
