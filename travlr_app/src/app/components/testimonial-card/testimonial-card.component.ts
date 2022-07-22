import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent implements OnInit {

  @Input()
  content: String;

  @Input()
  author: String;

  constructor() { }

  ngOnInit() {
  }

}
