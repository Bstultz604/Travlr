import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  date: Date

  @Input()
  content: String;

  postDate: String;

  constructor() { }

  ngOnInit() {
    this.dateToString(this.date);  
  }

  dateToString(date: Date) { 
    const d = new Date(date);
    this.postDate = d.toLocaleDateString();
  }
}
