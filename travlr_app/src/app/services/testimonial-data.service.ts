import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from "@angular/http";

import { Testimonial } from "../models/testimonials";

@Injectable()
export class TestimonialDataService {
  constructor(
    private http: Http,
  ) { }

  private apiBaseUrl = "http://localhost:3000/api/";
  private testimonialUrl = `${this.apiBaseUrl}testimonials/`;

  public getTestimonials(): Promise<Testimonial[]> {
    console.log("Inside TestimonialDataService#getTestimonials");
    return this.http
      .get(`${this.apiBaseUrl}testimonials`)
      .toPromise()
      .then((response) => response.json() as Testimonial[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
