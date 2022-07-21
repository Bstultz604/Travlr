import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-highlight',
  templateUrl: './news-highlight.component.html',
  styleUrls: ['./news-highlight.component.css']
})
export class NewsHighlightComponent implements OnInit {

  constructor() { }

  postDate: String;

  ngOnInit() {
    this.dateToString(this.date);
  }

  @Input()
  title: string

  @Input()
  author: string

  @Input()
  content: string

  @Input()
  date: Date

  @Input()
  image: string

  dateToString(date: Date) {
    const d = new Date(date);
    this.postDate = d.toLocaleDateString();
  }
}
