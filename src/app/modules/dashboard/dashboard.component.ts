import { Component, OnInit } from '@angular/core';
import { CalendarService } from './services/calendar.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { NotificationPopupComponent } from 'src/app/reusable-components/notification-popup/notification-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedMonth: string;
  selectedYear: number;
  bsModalRef: BsModalRef;
  constructor(private calendarService: CalendarService,private modalService: BsModalService) {

    this.calendarService.selectedMonth.subscribe(month => {
      this.selectedMonth = month
    })

    this.calendarService.selectedYear.subscribe(year => {
      this.selectedYear = year
    })

    console.log(this.selectedYear, this.selectedMonth)
  }

  ngOnInit() {

  }

  monthForward() {
    this.calendarService.updateNextMonth(this.selectedMonth)
  }

  monthBackword() {
    this.calendarService.updatePerviousMonth(this.selectedMonth)
  }

  AddEvent(event, row) {
    this.bsModalRef = this.modalService.show(NotificationPopupComponent,{class: 'notification-popup'});
  }
}
