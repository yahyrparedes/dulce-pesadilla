import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  pesadillas = [];
  pesadillaStart;

  constructor( private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.loadData().subscribe((data: any) => {
      console.log(data);
      this.pesadillas = data;
      this.pesadillaStart = this.pesadillas.length - 1;
    });
  }

}
