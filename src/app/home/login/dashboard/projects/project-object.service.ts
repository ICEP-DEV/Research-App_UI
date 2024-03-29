import { Injectable, Type } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from 'src/app/apiservice.service';
import { url } from 'src/app/globals';




@Injectable({
  providedIn: 'root'
})

export class ProjectObjectService {
  constructor(private http:HttpClient, public service: ApiserviceService) {}
  //GOAL SETTINGS, UPDATING VARIABLES

  //================
  //PROJECT OBJECT
  //================
  projectObject:any;


  setOpenedProjectObject(projectObject:any)
  {
    this.projectObject = projectObject;
  }

  getOpenedProjectObject()
  {
    return this.projectObject;
  }
  
  apiUrl = url;
  student_pass_down_data:any;
  userDatails:any;
  messageReplyTo = "";
  messageObject = {
    text: "",
    title: "",
    userId: 0,
    goalId: 0,
    projectStatusId: 13
  };

  setMessageObject(messageObject:any, replyingTo:any)
  {
    this.messageObject = messageObject;

  }

  getMessageObject()
  {
    return this.messageObject;
  }


  //CREATE A COMPONENT TO SET THE STUDENT_PASS_DOWN_DATA 
  apiCreateNewGoal(data:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl + "goal"}`, data)
  }
  passStudentData(data:any)
  {
    this.student_pass_down_data = data;
  }
  getPassStudentData()
  {
    return this.student_pass_down_data;
  }

  //CREATE COMPONTEN TO SET AND GET THE DATA THE USER IS GOING TO GET
  setUserDetails(data:any)
  { 
    this.userDatails = data;
  }
  getUserDetails()
  {
    return this.userDatails;
  }


  
  sequenceSubscriber(observer: Observer<any>)
  {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    //Unsubscribe function doesn't need to do anything in this 
    //Because values are delivered synchronously
    return {unsubscribe() {}};
  } 

  sequence = new Observable(this.sequenceSubscriber);



  static noteObject = {id: 0,
   text: "",
   title: "",
   wordCount: 0,
   createdAt: "",
   projectId: 1,
   userId: 1};
  static projectObject = {
    id: 1,
    name: "Not Found",
    description: "NB: Project Not found consider the following:\n - Login before you open project\n Logout and login",
    text: "No Text Found",
    startDate: "2022-03-01T07:40:49.000Z",
    keyword: "No Key word found",
    endDate: null,
    userId: 1,
    supervisorId: null,
    references: null,
    createdAt: "2022-02-24T16:18:00.000Z",
    updatedAt: "2022-02-24T16:18:00.000Z",
    projectStatusId: 0,
    projectTypeId: 0
  }

  ngOnInit(): void
  {
  }



  //Function to update the project Object
  updateProjectObject(projectId:any)
  {
      this.service.getProject(projectId).subscribe((res)=>{
        //console.log(res, 'res=>');
        ProjectObjectService.projectObject = res.project;
      });
  }
  setProjectObject(projectObject:any)
  {
    ProjectObjectService.projectObject= projectObject;
  }
  static projectDefinition = {};

  static projectOpened = false;
  updateNoteObject(noteId:any)
  {
    ProjectObjectService.projectOpened = true;
    this.service.getNote(noteId).subscribe((res)=>{
      //console.log(res,'res=>');
      ProjectObjectService.noteObject = res.note;
    });
    // return ProjectObjectService.noteObject;
  }
}


