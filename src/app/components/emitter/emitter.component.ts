import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myNumber = 0

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
    this.myNumber = Math.round(Math.random() * (1000 - 0) + 0)
  }

}
