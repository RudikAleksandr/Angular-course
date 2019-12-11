import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';
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

  public async handlerClickLogOffBtn(): Promise<void> {
    await this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
