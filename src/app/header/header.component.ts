import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title;
  description;

  constructor() { }

  ngOnInit() {
    this.title = ' DULCE PESADILLA ';
    this.description  = 'Escritos que describen.';
  }

}
