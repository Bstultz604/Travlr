import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-router.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdboxComponent } from './components/adbox/adbox.component';
import { ListingComponent } from './components/listing/listing.component';
import { RoomsPageComponent } from './components/rooms-page/rooms-page.component';
import { TravelPageComponent } from './components/travel-page/travel-page.component';
import { MealPageComponent } from './components/meal-page/meal-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

//import { TripDataService } from './services/trip-data.service';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsHighlightComponent } from './components/news-highlight/news-highlight.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    AdboxComponent,
    ListingComponent,
    BlogCardComponent,
    TestimonialCardComponent,
    RoomsPageComponent,
    TravelPageComponent,
    MealPageComponent,
    NewsPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    TripCardComponent,
    RoomCardComponent,
    MealCardComponent,
    NewsListComponent,
    NewsHighlightComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    //TripDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
