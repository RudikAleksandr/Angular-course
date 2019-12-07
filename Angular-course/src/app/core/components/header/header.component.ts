import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,

  ) { }

  ngOnInit() {
  }

  onClickLogOffButton(): void {
    this.authService.logout().then(() => {
      console.log('action: LOGOUT');
    });
  }
}
