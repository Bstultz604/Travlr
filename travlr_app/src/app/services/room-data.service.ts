import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from "@angular/http";

import { Room } from "../models/rooms";

@Injectable()
export class RoomDataService {
  constructor(
    private http: Http,  
  ) { }

  private apiBaseUrl = "http://localhost:3000/api/";
  private roomUrl = `${this.apiBaseUrl}rooms/`;

  public getRooms(): Promise<Room[]> {
    console.log("Inside RoomDataService#getTrips");
    return this.http
      .get(`${this.apiBaseUrl}rooms`)
      .toPromise()
      .then((response) => response.json() as Room[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
