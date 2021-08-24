import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { DayContentComponent } from './components/day-content/day-content.component';
import { CalendarService } from './services/calendar.service';
import { NotificationPopupModule } from 'src/app/reusable-components/notification-popup/notification-popup.module';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
@NgModule({
  declarations: [DashboardComponent, MonthViewComponent, DayContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NotificationPopupModule
  ],
  providers:[CalendarService]
})
export class DashboardModule { }
