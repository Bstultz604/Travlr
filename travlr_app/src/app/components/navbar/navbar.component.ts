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


  private homePage(): void {
    this.router.navigate(['']);
  }

  private roomsPage(): void {
    this.router.navigate(['rooms-page']);
    //console.log('test');
  }

  private travelPage(): void {
    this.router.navigate(['travel-page']);
  }

  private mealPage(): void {
    this.router.navigate(['meal-page']);
  }

  private newsPage(): void {
    this.router.navigate(['news-page']);
  }

  private aboutPage(): void {
    this.router.navigate(['about-page']);
  }

  private contactPage(): void {
    this.router.navigate(['contact-page']);
  }
}

