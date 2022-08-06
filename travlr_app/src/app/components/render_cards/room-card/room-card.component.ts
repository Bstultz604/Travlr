import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Input()
  name: string

  @Input()
  description: string

  @Input()
  rate: string

  @Input()
  image: string
}
