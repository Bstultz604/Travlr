import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from "@angular/http";

import { Blog } from "../models/blog";

@Injectable()
export class BlogDataService {
  constructor(
    private http: Http,
  ) { }

  private apiBaseUrl = "http://localhost:3000/api/";
  private blogUrl = `${this.apiBaseUrl}blogs/`;

  public getBlogs(): Promise<Blog[]> {
    console.log("Inside BlogDataService#getBlogs");
    return this.http
      .get(`${this.apiBaseUrl}blogs`)
      .toPromise()
      .then((response) => response.json() as Blog[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
