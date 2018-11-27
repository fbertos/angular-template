import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) {
  }

  public checkSession() {
    let token = localStorage.getItem("session-token");

    if (token == null)  {
      this.router.navigateByUrl('/login');
    }
    else {
      this.router.navigateByUrl('/home');
    }
  }

  public logout() {
    localStorage.removeItem("session-token");
    this.router.navigateByUrl('/login');
  }

}
