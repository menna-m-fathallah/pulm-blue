import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { DropDownModule } from 'src/app/reusable-components/drop-down/drop-down.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotificationPopupModule } from 'src/app/reusable-components/notification-popup/notification-popup.module';
const routes: Routes = [
  { path: '',component: CustomersComponent },
  { path: 'profile', loadChildren: './../profile/profile.module#ProfileModule' },
];
@NgModule({
  declarations: [CustomersComponent],
  imports: [
    DropDownModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    NotificationPopupModule,
    FormsModule
  ]
})
export class CustomersModule { }
