/**/
/*File declares and imports all neccesary files for apps front end rendering*/
/*Imports are passed to NgModule which packages external class imports and custom class imports for the entire front end application*/
/**/


//External resources
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-router.module';

//Imports the main mounting component for use
import { AppComponent } from './app.component';

//Imports for custom componet logic
//Can be found at ROUTE: travlr_MEAN/travlr_app/src/app/components/*
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AdboxComponent } from './components/adbox/adbox.component';
import { ListingComponent } from './components/listing/listing.component';
import { RoomsPageComponent } from './components/pages/rooms-page/rooms-page.component';
import { TravelPageComponent } from './components/pages/travel-page/travel-page.component';
import { MealPageComponent } from './components/pages/meal-page/meal-page.component';
import { NewsPageComponent } from './components/pages/news-page/news-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BlogCardComponent } from './components/render_cards/blog-card/blog-card.component';
import { TestimonialCardComponent } from './components/render_cards/testimonial-card/testimonial-card.component';
import { TripCardComponent } from './components/render_cards/trip-card/trip-card.component';
import { RoomCardComponent } from './components/render_cards/room-card/room-card.component';
import { MealCardComponent } from './components/render_cards/meal-card/meal-card.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsHighlightComponent } from './components/news-highlight/news-highlight.component';

//Packeges all components and external resources to be used in front end application
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
  bootstrap: [AppComponent]
})
export class AppModule { }
