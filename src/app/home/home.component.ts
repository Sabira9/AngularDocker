import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  img1 = '/assets/port1.jpg';
  img2 = '/assets/port2.jpg';
  img3 = '/assets/port3.jpg';
  constructor() {}

  ngOnInit(): void {}
}
