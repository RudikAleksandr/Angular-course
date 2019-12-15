import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IUser } from 'src/app/core/interfaces/user.model';
import { Router } from '@angular/router';
import { Routes } from 'src/app/core/enums/routes.enum';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string;
  public password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
  }

  public handlerClickLoginBtn(): void {
    this.authService.login(this.login, this.password).subscribe(() => {
      this.router.navigateByUrl(Routes.COURSES);
      this.loadingService.setLoading(false);
    });
  }
}
