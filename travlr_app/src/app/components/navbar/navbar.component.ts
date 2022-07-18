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

  //router to home page
  private homePage(): void {
    this.router.navigate(['']);
  }

  //router to rooms page
  private roomsPage(): void {
    this.router.navigate(['rooms-page']);
  }

  //router to travel page
  private travelPage(): void {
    this.router.navigate(['travel-page']);
  }

  //router to meal page
  private mealPage(): void {
    this.router.navigate(['meal-page']);
  }

  //router to news page
  private newsPage(): void {
    this.router.navigate(['news-page']);
  }

  //router to about page
  private aboutPage(): void {
    this.router.navigate(['about-page']);
  }

  //router to contact page
  private contactPage(): void {
    this.router.navigate(['contact-page']);
  }
}

