import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPopupComponent } from './notification-popup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { MatDatepickerModule, MatDatepickerIntl } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [NotificationPopupComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CalendarModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    FormsModule 
  ],
  entryComponents: [NotificationPopupComponent],
  providers:[MatDatepickerModule]
})
export class NotificationPopupModule { }
