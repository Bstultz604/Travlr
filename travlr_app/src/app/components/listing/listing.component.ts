import { Component, OnInit, Input } from '@angular/core';

import { TripDataService } from '../../services/trip-data.service';
import { BlogDataService } from '../../services/blog-data.service';
import { TestimonialDataService } from '../../services/testimonial-data.service';

import { Testimonial } from '../../models/testimonials';
import { Trip } from '../../models/trip';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [
    TripDataService,
    BlogDataService,
    TestimonialDataService
  ]
})
export class ListingComponent implements OnInit {


  testimonials: Testimonial[];
  trips: Trip[];
  blogs: Blog[];

  message: string;

  @Input()
  title: string;

  @Input()
  data: string;

  constructor(
    private tripDataService: TripDataService,
    private blogDataService: BlogDataService,
    private testimonialDataService: TestimonialDataService
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
}
