import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports the custom components
import { HomePageComponent } from './components/home-page/home-page.component';
import { RoomsPageComponent } from './components/rooms-page/rooms-page.component';
import { TravelPageComponent } from './components/travel-page/travel-page.component';
import { MealPageComponent } from './components/meal-page/meal-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

//Sets up routing reference paths for each custom component
//Can see these refercne routes in navbar component (ROUTE: travlr_MEAN/travlr_app/src/app/components/navbar/navbar.components.ts)
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'rooms-page', component: RoomsPageComponent },
  { path: 'travel-page', component: TravelPageComponent },
  { path: 'meal-page', component: MealPageComponent },
  { path: 'news-page', component: NewsPageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
]

//Packeges the custom routing references and the external routingModule class for use elsewhere in application
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
