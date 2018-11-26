import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username : string;
  private password : string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private login(event) {
    var token = this.guid();
    localStorage.setItem("session-token", token);
    this.router.navigateByUrl('/home');
  }

  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}
