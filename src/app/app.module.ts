import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidenavService } from './services/navs/sidenav.service';
import { ProjectObjectService } from './home/login/dashboard/projects/project-object.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { BlogComponent } from './home/blog/blog.component';
import { DashboardComponent } from './home/login/dashboard/dashboard.component';
import { ProfileComponent } from './home/login/dashboard/profile/profile.component';
import { ProjectsComponent } from './home/login/dashboard/projects/projects.component';
import { NotesComponent } from './home/login/dashboard/projects/notes/notes.component';
import { GuidelinesComponent } from './home/login/dashboard/projects/guidelines/guidelines.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from './home/login/dashboard/projects/project/project.component';
import { SidenavComponent } from './home/login/sidenav/sidenav.component';
import { TopnavComponent } from './home/login/dashboard/projects/topnav/topnav.component';
import { ChatboxComponent } from './home/login/dashboard/chatbox/chatbox.component';
import { HomenavbarComponent } from './home/homenavbar/homenavbar.component';
import { InnernavComponent } from './home/login/dashboard/projects/topnav/innernav/innernav.component';
import { ProjectWriteComponent } from './home/login/dashboard/projects/project/project-write/project-write.component';
import { GlobalVariables } from './globals';
import { ProjectStatusComponent } from './home/login/dashboard/projects/project/project-status/project-status.component';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BlogOpComponent } from './home/blog-op/blog-op.component';
import { TokenInterceptor } from './services/auth/interceptors/token.interceptors';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectEventsComponent } from './home/login/dashboard/projects/project/project-events/project-events.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormControl } from '@angular/forms';
import { ChatboxServiceService } from './services/chatbox/chatbox-service.service';
import { NotesService } from './home/login/dashboard/projects/notes/notes.service';
import { MaterialModule } from './material/material.module';
import { ChatgroupComponent } from './home/login/dashboard/chatbox/chatgroup/chatgroup/chatgroup.component';
import { BlogformComponent } from './home/blogform/blogform.component';
import { AddsourceComponent } from './home/addsource/addsource.component';
import { GoalsService } from './services/project-events-goals/goals.service';
import { FeedbackService } from './services/feedback/feedback.service';
import { GuidelinesService } from './services/guidelines/guidelines.service';
import { BlogService } from './services/blog/blog.service';
import { GoalFilesService } from './services/goal-file/goal-files.service';
import { GuidelineTitleComponent } from './home/login/dashboard/projects/guidelines/guideline-title/guideline-title.component';
import { TemplatePipesPipe } from './home/login/dashboard/projects/guidelines/pipes/template-pipes.pipe';
import { AppointmentService } from './services/project-appointment/appointment.service';
import { NewInnerHeaderComponent } from './new-inner-header/new-inner-header.component';
import { ProjectInnerHeaderComponent } from './project-inner-header/project-inner-header.component';
import { NewToolboxComponent } from './new-toolbox/new-toolbox.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminManageStudentsComponent } from './admin/students/admin-manage-students/admin-manage-students.component';
import { AdminDashComponent } from './admin/dashboard/admin-dash/admin-dash.component';
import { AdminSupervisorsComponent } from './admin/supervisors/admin-supervisors/admin-supervisors.component';
import { AdminDashTopNavComponent } from './admin/admin-dash-top-nav/admin-dash-top-nav.component';
import { CreateNewAdminComponent } from './admin/supervisors/create-new-admin/create-new-admin/create-new-admin.component';
import { UpdateSupervisorsComponent } from './admin/supervisors/update-supervisors/update-supervisors/update-supervisors.component';
import { ListAdminsComponent } from './admin/list-admins/list-admins.component';
import { AdminCreateNewAdminComponent } from './admin/admin-create-new-admin/admin-create-new-admin.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BlogComponent,
    DashboardComponent,
    ProfileComponent,
    ProjectsComponent,
    NotesComponent,
    GuidelinesComponent,
    ProjectComponent,
    SidenavComponent,
    TopnavComponent,
    ChatboxComponent,
    HomenavbarComponent,
    InnernavComponent,
    ProjectWriteComponent,
    ProjectStatusComponent,
    BlogOpComponent,
    ProjectEventsComponent,
    SignupComponent,
    BlogformComponent,
    AddsourceComponent,
    GuidelineTitleComponent,
    TemplatePipesPipe,
    NewInnerHeaderComponent,
    ProjectInnerHeaderComponent,
    NewToolboxComponent,
    AdminManageStudentsComponent,
    AdminDashComponent,
    AdminSupervisorsComponent,
    AdminDashTopNavComponent,
    CreateNewAdminComponent,
    UpdateSupervisorsComponent,
    ListAdminsComponent,
    AdminCreateNewAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SidenavService, 
    GlobalVariables, 
    ApiserviceService,
    NotesService,
    ProjectObjectService,
    ChatboxServiceService,
    GoalsService,
    FeedbackService,
    GuidelinesService,
    BlogService,
    GoalFilesService,
    AppointmentService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DatePipe,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
