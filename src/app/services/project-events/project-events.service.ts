import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectEventsService {

  constructor(private _http:HttpClient) { }
  // apiUrl = 'http://168.172.189.59:3000/api/v1/';
  apiUrl = 'http://3.83.42.8:3000/api/v1/';
  // apiUrl = 'http://localhost:3000/api/v1/';
  //Create an API request for creating a goal
  goalObject:any;
  // createNewGoal(): Observable<any>
  // {
  //   return this._http.
  // }

}
