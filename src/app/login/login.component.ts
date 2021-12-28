import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../Services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly loginService: LoginService,
  ) { }
  email: any;
  password: any;
  ngOnInit(): void {
    var userlogin = localStorage.getItem('user')
    if (userlogin) {
      window.location.href = "";
    }
  }
  login() {

    var val = {
      email: this.email,
      password: this.password,

    };
    this.loginService.login(val).subscribe((data: any) => {
      if (data.status==1) {
        window.location.href = "";
        localStorage.setItem('user', JSON.stringify(data.data));
      } else {
        window.location.href = "/dang-nhap";
      }
    });
  }

}
