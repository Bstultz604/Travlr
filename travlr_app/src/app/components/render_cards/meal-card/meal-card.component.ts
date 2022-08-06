import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  type: string

  @Input()
  name: string

  @Input()
  description: string

  @Input()
  image: string
}
