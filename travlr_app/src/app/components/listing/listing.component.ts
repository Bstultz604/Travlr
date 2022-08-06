import { Component, OnInit, Input } from '@angular/core';

import { TripDataService } from '../../services/trip-data.service';
import { BlogDataService } from '../../services/blog-data.service';
import { TestimonialDataService } from '../../services/testimonial-data.service';
import { RoomDataService } from '../../services/room-data.service';
import { MealDataService } from '../../services/meal-data.service';

import { Testimonial } from '../../models/testimonials';
import { Trip } from '../../models/trip';
import { Blog } from '../../models/blog';
import { Room } from '../../models/rooms'; 
import { Meal } from '../../models/meals';


import { blogMergeSort } from '../../algorithims/merge_sort';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [
    TripDataService,
    BlogDataService,
    TestimonialDataService,
    RoomDataService,
    MealDataService
  ]
})
export class ListingComponent implements OnInit {

  rooms: Room[];
  testimonials: Testimonial[];
  trips: Trip[];

  blogs: Blog[];
  blogsByType: Blog[];

  meals: Meal[];

  message: string;

  @Input()
  type: string;

  @Input()
  data: string;

  constructor(
    private tripDataService: TripDataService,
    private blogDataService: BlogDataService,
    private testimonialDataService: TestimonialDataService,
    private roomDataService: RoomDataService,
    private mealDataService: MealDataService
  ) { }

  ngOnInit() {
    this.data;
    if (this.data == "trip") {
      this.getTrips();
    }

    if (this.data == "blog") {
      this.getBlogs();
    }

    if (this.data == "testimonial") {
      this.getTestimonials();
    }

    if (this.data == "room") {
      this.getRooms();
    }

    if (this.data == "meal") {
      this.getMeals();
    }

    if (this.data == "news-listing") {
      this.getBlogsByType(this.type);    
    }

    if (this.data == "news-highlight") {
      this.getBlogs();
    }
  }

  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService
      .getTrips()
      .then(foundTrips => {
        this.message = foundTrips.length > 0 ? '' : 'No trips found';
        this.trips = foundTrips;
      });
  }

  private getBlogs(): void {
    console.log('Inside BlogListingComponent#getBlogs');
    this.message = 'Searching for Blogs';
    this.blogDataService
      .getBlogs()
      .then(foundBlogs => {
        this.message = foundBlogs.length > 0 ? '' : 'No Blogs found';
        this.blogs = foundBlogs;
      });
  }

  private getBlogsByType(type : String): void {
    console.log('Inside BlogListingComponent#getBlogsByType');
    this.message = `Searching for Blogs of Type {{this.type}}`;
    this.blogDataService
      .getBlogType(type)    
      .then(foundBlogs => {
        this.message = foundBlogs.length > 0 ? '' : 'No Blogs found';
        //algorithim: sorts retireved data in reverse Chrologhical order
        //'foundblogs' is rearranged in this order
        blogMergeSort(foundBlogs, 0, foundBlogs.length - 1);    
        this.blogs = foundBlogs;
      });
  }

  private getTestimonials(): void {
    console.log('Inside TestimonialsListingComponent#getTestimonails');
    this.message = 'Searching for Testimonials';
    this.testimonialDataService
      .getTestimonials()
      .then(foundTestimonials => {
        this.message = foundTestimonials.length > 0 ? '' : 'No Testimonials found';
        this.testimonials = foundTestimonials;
      });
  }

  private getRooms(): void {
    console.log('Inside RoomListingComponent#getRooms');
    this.message = 'Searching for Rooms';
    this.roomDataService
      .getRooms()
      .then(foundRooms => {
        this.message = foundRooms.length > 0 ? '' : 'No Rooms found';
        this.rooms = foundRooms;
      });
  }

  private getMeals(): void {
    console.log('Inside MealListingComponent#getMeal');
    this.message = 'Searching for Meals';
    this.mealDataService
      .getMeals()
      .then(foundMeals => {
        this.message = foundMeals.length > 0 ? '' : 'No Meals found';
        this.meals = foundMeals;
      });
  }
}
