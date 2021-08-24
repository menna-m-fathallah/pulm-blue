import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { combineLatest } from 'rxjs';
import { daysNames, monthNames } from './../../enums/enum';
import * as moment from 'moment';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  selectedMonth: string;
  selectedYear: number;
  numberOfDays: number;
  numberOfDays_LastMonth: number;
  numberOfDays_NextMonth: number;
  monthEvents;
  startDate
  endDate
  numDaysBeforeMonth: number;
  numDaysAfterMonth: number;
  indexOfFirstDate
  today = moment(new Date()).format('MM-DD-YYYY')
  constructor(private calendarService: CalendarService) {

    this.calendarService.selectedMonth.subscribe(month => {
      this.selectedMonth = month;
    })

    this.calendarService.selectedYear.subscribe(year => {
      this.selectedYear = year;
    })

    combineLatest(this.calendarService.selectedMonth, this.calendarService.selectedYear).subscribe(results => {
      this.numberOfDays = this.calendarService.getDaysInMonth(results[0], results[1]);
      this.startDate = moment(this.getFirstDateInCalendar()).format("MM-DD-YYYY")
      this.indexOfFirstDate = this.numDaysBeforeMonth
      this.numDaysAfterMonth = 35 - (this.numDaysBeforeMonth + this.numberOfDays)
      if (this.numDaysAfterMonth) {
        this.endDate = moment(this.getLastDateInCalendar()).format("MM-DD-YYYY")
      }
      else {
        let output = ""
        let day = this.numberOfDays;
        output = monthNames[this.selectedMonth] + "-" + day + "-" + this.selectedYear
        this.endDate = moment(output).format("MM-DD-YYYY")
      }
      //here we get data from backend
      this.monthEvents = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
      this.monthEvents[0].date = this.startDate;
      let temp = this.startDate
      for (let i = 1; i < 35; i++) {
        this.monthEvents[i].date = this.calendarService.getNextDay(temp)
        temp = this.monthEvents[i].date;
        this.monthEvents[i].events = []
        for (let j = 0; j < i; j++) {
          this.monthEvents[i].events.push({ time: "06:40", title: "home event" })
        }
      }
    });
  }

  ngOnInit() {

  }

  getFirstDateInCalendar() {
    let lastMonth_year = this.calendarService.getPreviousMonth_Year(this.selectedMonth);
    this.numberOfDays_LastMonth = this.calendarService.getDaysInMonth(lastMonth_year['month'], lastMonth_year['year']);
    this.numDaysBeforeMonth = daysNames[this.calendarService.getDayName({ year: this.selectedYear, month: this.selectedMonth })] - 1
    let output = ""
    let day = this.numberOfDays_LastMonth - this.numDaysBeforeMonth + 1
    output = monthNames[lastMonth_year['month']] + "-" + day + "-" + lastMonth_year['year']
    return output
  }

  getLastDateInCalendar() {
    let nextMonth_year = this.calendarService.getNextMonth_Year(this.selectedMonth);
    let output = ""
    let day = this.numDaysAfterMonth;
    output = monthNames[nextMonth_year['month']] + "-" + day + "-" + nextMonth_year['year']
    return output
  }
}
