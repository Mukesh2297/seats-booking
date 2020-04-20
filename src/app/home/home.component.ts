import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { MainService } from '../main.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userName: string;

  constructor(private apiService: ApiService, private router: Router, private appService: MainService) {
      this.userName = this.appService.userName;
    }

  logout() {
    let logOutResponse;

    this.apiService.post('auth/logout', {}).subscribe((logout) => {
      logOutResponse = logout;
    });
  }

  mybookings() {
    this.router.navigate(['/', 'mybookings']);
  }
}
