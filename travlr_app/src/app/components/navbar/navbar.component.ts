import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  selected: string;

  //router to home page
  private homePage(): void {
    this.router.navigate(['']);
    this.selected = "home";
  }

  //router to rooms page
  private roomsPage(): void {
    this.router.navigate(['rooms-page']);
    this.selected = "rooms";
  }

  //router to travel page
  private travelPage(): void {
    this.router.navigate(['travel-page']);
    this.selected = "travel";
  }

  //router to meal page
  private mealPage(): void {
    this.router.navigate(['meal-page']);
    this.selected = "meals";
  }

  //router to news page
  private newsPage(): void {
    this.router.navigate(['news-page']);
    this.selected = "news";
  }

  //router to about page
  private aboutPage(): void {
    this.router.navigate(['about-page']);
    this.selected = "about";
  }

  //router to contact page
  private contactPage(): void {
    this.router.navigate(['contact-page']);
    this.selected = "contact";
  }
}

