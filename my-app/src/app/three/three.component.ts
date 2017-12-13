import { Component, OnInit, OnChanges } from '@angular/core';


@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})


export class ThreeComponent implements OnInit {

  constructor() { }

  ngOnChanges():void {
    console.log("ngOnChanges() is called");
  }

  ngOnInit() : void {
    console.log("ngOnInit() is called");
  }
  ngDoCheck() : void {
    console.log("ngDoCheck() is called");
  }
}
