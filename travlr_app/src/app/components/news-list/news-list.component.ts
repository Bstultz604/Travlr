import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  providers: [
  ]
})
export class NewsListComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit() {

  }

  @Input()
  title:string
}
