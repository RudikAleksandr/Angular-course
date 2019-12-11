import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth.service';
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

  public async handlerClickLoginBtn(): Promise<void> {
    const user: IUser = await this.authService.login(this.login, this.password);
    if (user) {
      this.router.navigateByUrl('courses');
    }
  }
}
