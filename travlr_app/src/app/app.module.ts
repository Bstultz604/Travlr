import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdboxComponent } from './components/adbox/adbox.component';
import { ListingComponent } from './components/listing/listing.component';

//import { TripDataService } from './services/trip-data.service';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';

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
    TestimonialCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    //TripDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
