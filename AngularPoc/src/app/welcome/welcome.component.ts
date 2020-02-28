import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
 // template: '<h1>{{title}}</h1>',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
title : string;
  constructor() { }

  ngOnInit() {
    this.title = "Hi Welcome Sudhir"

  }

}
