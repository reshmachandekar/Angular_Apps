import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };  
  constructor() { }

  ngOnInit() {
  }

}
