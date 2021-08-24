import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteredUsersComponent } from './registered-users.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { DropDownModule } from 'src/app/reusable-components/drop-down/drop-down.module';
import { FormsModule } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap';
import { NotificationPopupComponent } from 'src/app/reusable-components/notification-popup/notification-popup.component';
import { NotificationPopupModule } from 'src/app/reusable-components/notification-popup/notification-popup.module';
const routes: Routes = [
  {
    path: '',
    component: RegisteredUsersComponent
  }
];
@NgModule({
  declarations: [RegisteredUsersComponent],
  entryComponents:[NotificationPopupComponent],
  imports: [
    PaginationModule.forRoot(),
    RouterModule.forChild(routes),
    CommonModule,
    DropDownModule,
    NotificationPopupModule,
    FormsModule
  ],
  providers:[BsModalService]
})
export class RegisteredUsersModule { }
