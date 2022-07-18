import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { RoomsPageComponent } from './components/rooms-page/rooms-page.component';
import { TravelPageComponent } from './components/travel-page/travel-page.component';
import { MealPageComponent } from './components/meal-page/meal-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'rooms-page', component: RoomsPageComponent },
  { path: 'travel-page', component: TravelPageComponent },
  { path: 'meal-page', component: MealPageComponent },
  { path: 'news-page', component: NewsPageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
