import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from "@angular/http";

import { Meal } from "../models/meals";

@Injectable()
export class MealDataService {
  constructor(
    private http: Http,
  ) { }

  private apiBaseUrl = "http://localhost:3000/api/";
  private mealUrl = `${this.apiBaseUrl}meals/`;

  public getMeals(): Promise<Meal[]> {
    console.log("Inside MealDataService#getMeal");
    return this.http
      .get(`${this.apiBaseUrl}meals`)
      .toPromise()
      .then((response) => response.json() as Meal[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
