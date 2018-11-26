import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    let token = localStorage.getItem("session-token");

    if (token == null)  {
      this.router.navigateByUrl('/login');
    }
    else {
      this.router.navigateByUrl('/home');
    }
  }

  title = 'angular-template';
}
