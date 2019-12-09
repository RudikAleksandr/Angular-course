import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  onClickLogOffButton(): void {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('login');
      console.log('action: LOGOUT');
    });
  }
}
