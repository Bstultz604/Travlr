import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  name: String

  @Input()
  length: String

  @Input()
  start: Date

  @Input()
  resort: String

  @Input()
  cost: String

  @Input()
  image: String

  @Input()
  description: String

}
