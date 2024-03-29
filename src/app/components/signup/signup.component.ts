import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DepartmentFacultiesService } from 'src/app/services/department-faculties/department-faculties.service';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']//
})
export class SignupComponent implements OnInit {
  @ViewChild('inputDescription') inputDescription: any;
  @ViewChild('chosenDepartment') chosenDepartment:any;
  signUpForm: User = new User;
  errors: any = [];
  disciplineNotFound: any = [{department:{id: 0, name: "Not Found"}}]
  pCheck: string ='';
  faculties:any;
  departments:any = this.disciplineNotFound;
  constructor(private authService:AuthService,private router: Router, private departmentFacultiesService: DepartmentFacultiesService ) { }

  ngOnInit(): void {
    this.departmentFacultiesService.getFaculties().subscribe((data:any)=>{
      this.faculties = data.faculties;
    })
  }

  getFacultyDepartments()
  {
    console.log(this.inputDescription.nativeElement.value);
    this.departmentFacultiesService.getFacultyDepartment(this.inputDescription.nativeElement.value).subscribe((data:any)=>{
      if(data.status == "error")
      {
        console.log("error found");
        this.departments = "";
        this.departments = this.disciplineNotFound;
      }
      if(data.status == "success")
      {
        this.departments = "";
        this.departments = data.discipline;
      }

      console.log(data)
    })
    
  }

  checkPassword():void{this.pCheck = this.signUpForm.password !== this.signUpForm.confirmPassword ? 'Password does not match' : '' }

  signUp(){
    this.signUpForm.disciplineId = this.chosenDepartment.nativeElement.value;

    this.authService.signUp(this.signUpForm).subscribe({
      next: data => {
        // console.log('Sign in data:',data)
        var newData:any = data;
        // console.log(newData.status);
        this.errors = [];
        if(newData.status == "success")
        {
          this.router.navigate(['/login']);
        }
      },
      error: err => {
        this.errors[0] = err.message;
      }
    })
  }

}
