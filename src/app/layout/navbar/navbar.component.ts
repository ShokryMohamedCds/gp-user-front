import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Gp';
  userData: user = { id: '', name: '', email: '', token: '' };
  loggedIn = false;

  constructor(public router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.auth.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.auth.userData$.subscribe(userData => {
      this.userData = userData;
    });
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
