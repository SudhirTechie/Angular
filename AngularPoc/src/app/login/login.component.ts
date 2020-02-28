import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  login(){
    if(this.username === 'admin' && this.password ==='admin'){
      this.router.navigateByUrl('/registration');
    }
    console.log(this.username);
    console.log(this.password);
  }

}
