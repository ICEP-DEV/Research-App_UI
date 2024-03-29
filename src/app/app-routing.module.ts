// When applied to an element in a template, makes that element a link that initiates navigation to a route.
//  Navigation opens one or more routed components in one or more <router-outlet> locations on the page.

/*
You can use absolute or relative paths in a link,
set query parameters,
control how parameters are handled,
and keep a history of navigation states.
*/

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './home/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/login/dashboard/dashboard.component';
import { ProfileComponent } from './home/login/dashboard/profile/profile.component';
import { GuidelinesComponent } from './home/login/dashboard/projects/guidelines/guidelines.component';
import { ProjectsComponent } from './home/login/dashboard/projects/projects.component';
import { NotesComponent } from './home/login/dashboard/projects/notes/notes.component';
import { ProjectComponent } from './home/login/dashboard/projects/project/project.component';
import { LoginComponent } from './home/login/login.component';
import { SidenavComponent} from './home/login/sidenav/sidenav.component';
import { ChatboxComponent } from './home/login/dashboard/chatbox/chatbox.component';
import { HomenavbarComponent } from './home/homenavbar/homenavbar.component';
import { InnernavComponent } from './home/login/dashboard/projects/topnav/innernav/innernav.component';
import { ProjectWriteComponent } from './home/login/dashboard/projects/project/project-write/project-write.component';
import { ProjectStatusComponent } from './home/login/dashboard/projects/project/project-status/project-status.component';
import { BlogOpComponent } from './home/blog-op/blog-op.component';
import { BlogformComponent } from './home/blogform/blogform.component';
import { ProjectEventsComponent } from './home/login/dashboard/projects/project/project-events/project-events.component';
import { SignupComponent } from './components/signup/signup.component';
import { SessionGuardService } from './services/auth/session-guard.service';
import { AddsourceComponent } from './home/addsource/addsource.component';
import { BlogService } from './services/blog/blog.service';
import { NewToolboxComponent } from './new-toolbox/new-toolbox.component';
import { AdminDashComponent } from './admin/dashboard/admin-dash/admin-dash.component';
import { AdminManageStudentsComponent } from './admin/students/admin-manage-students/admin-manage-students.component';
import { AdminSupervisorsComponent } from './admin/supervisors/admin-supervisors/admin-supervisors.component';
import { CreateNewAdminComponent } from './admin/supervisors/create-new-admin/create-new-admin/create-new-admin.component';
import { UpdateSupervisorsComponent } from './admin/supervisors/update-supervisors/update-supervisors/update-supervisors.component';
import { AdminCreateNewAdminComponent } from './admin/admin-create-new-admin/admin-create-new-admin.component';
import { ListAdminsComponent } from './admin/list-admins/list-admins.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {path: 'home', component:DashboardComponent},
  {path: 'admin/dashboard', component:AdminDashComponent},
  {path: 'admin/manage-supervisors', component:AdminSupervisorsComponent},
  // {path: 'admin/manage-students', component:AdminDashComponent},
  {path: 'admin/dashboard', component:AdminManageStudentsComponent},
  {path: 'admin/list-admins', component:ListAdminsComponent},
  {path: 'admin/admin-create-new-admin', component:AdminCreateNewAdminComponent},
  {path: 'admin/create-new-supervisor', component:CreateNewAdminComponent},
  {path: 'admin/list-supervisors', component:UpdateSupervisorsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[SessionGuardService]},
  {path: 'profile', component:ProfileComponent, canActivate:[SessionGuardService]},
  {path: 'projects', component:ProjectsComponent, canActivate:[SessionGuardService]},
  {path: 'guidelines', component:GuidelinesComponent, canActivate:[SessionGuardService]},
  {path: 'notes', component:NotesComponent, canActivate:[SessionGuardService]},
  {path: 'project', component:ProjectComponent, canActivate:[SessionGuardService]},
  {path: 'blog', component:BlogComponent},
  {path: 'sidenav', component:SidenavComponent, canActivate:[SessionGuardService]},
  {path: 'chatbox', component:ChatboxComponent, canActivate:[SessionGuardService]},
  {path: 'homenavbar', component:HomenavbarComponent, canActivate:[SessionGuardService]},
  {path: 'innernav', component:InnernavComponent, canActivate:[SessionGuardService]},
  {path: 'project-write', component:ProjectWriteComponent, canActivate:[SessionGuardService]},
  {path: 'project-status', component:ProjectStatusComponent, canActivate:[SessionGuardService]},
  {path: 'blog-op', component:BlogOpComponent},
  {path: 'blogform', component:BlogformComponent},
  {path: 'addsource', component:AddsourceComponent},
  {path: 'project-events', component:ProjectEventsComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'blog', component:BlogService},
  {path: 'toolbox', component: NewToolboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
