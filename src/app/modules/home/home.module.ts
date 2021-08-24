import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RoleGuard } from 'src/app/services/role.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: './../dashboard/dashboard.module#DashboardModule' },
      { path: 'registeredUsers', loadChildren: './../registered-users/registered-users.module#RegisteredUsersModule' },
      { path: 'customers', loadChildren: './../customers/customers.module#CustomersModule' },
      {
        path: 'employee', loadChildren: './../employee/employee.module#EmployeeModule', canActivate: [RoleGuard]
      },
    ]
  }
];
@NgModule({
  declarations: [HomeComponent, SideMenuComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [RoleGuard]
})
export class HomeModule { }
