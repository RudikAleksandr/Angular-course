import { Component } from '@angular/core';
import { AuthService } from './core/services/authService/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Angular-course';

  constructor(
    private authService: AuthService
  ) {}

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }
}
