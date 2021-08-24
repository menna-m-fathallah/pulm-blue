import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { monthNames, daysNames } from './../enums/enum'
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {


  selectedMonthObj = new BehaviorSubject(this.getCurrentMonth())
  selectedMonth = this.selectedMonthObj.asObservable()

  selectedYearObj = new BehaviorSubject(this.getCurrentYear())
  selectedYear = this.selectedYearObj.asObservable()



  constructor() { }

  getCurrentMonth() {
    let today = new Date()
    // today.getMonth() return numder of month where jan is 0
    // in enm jan is 1 so i need to increase it by 1
    return monthNames[today.getMonth() + 1]
  }

  getCurrentYear() {
    let today = new Date()
    return today.getFullYear();
  }

  getNextMonth_Year(month: string) {
    let output = {};
    let index = monthNames[month] + 1;
    //here to handle new year
    if (index > 12) {
      index = 1;
      output['year'] = this.selectedYearObj.value + 1;
    }
    else{
      output['year'] = this.selectedYearObj.value;
    }
    output['month'] = monthNames[index]
    return output
  }

  getPreviousMonth_Year(month: string) {
    let output = {};
    let index = monthNames[month] - 1;
    //here to handle last year
    if (index < 1) {
      index = 12;
      output['year'] = this.selectedYearObj.value - 1;
    }
    else{
      output['year'] = this.selectedYearObj.value;
    }
    output['month'] = monthNames[index]
    return output
  }

  updateNextMonth(month: string) {
    let output = this.getNextMonth_Year(month);
    this.selectedMonthObj.next(output['month']);
    this.selectedYearObj.next(output['year'])
  }

  updatePerviousMonth(month: string) {
    let output = this.getPreviousMonth_Year(month);
    this.selectedMonthObj.next(output['month']);
    this.selectedYearObj.next(output['year'])
  }

  getDaysInMonth(month: string, year) {
    let monthNum = monthNames[month];
    //jan here 1
    return new Date(year, monthNum, 0).getDate();
  }

  getDayName(d?) {
    d = d ? new Date(d.year + "-" + monthNames[d.month] + "-01") : new Date();
    var dayName = daysNames[d.getDay() + 1];
    return dayName
  }

  getNextDay(obj: string) {
    let date = new Date(obj)
    var nextDay = new Date(obj);
    nextDay.setDate(date.getDate() + 1);
    // console.log(obj,new Date("12-2-2020"),moment(new Date(obj.replace(/-/g, "/"))).format('YYYY-MM-DD').toString())
    return moment(nextDay).format("MM-DD-YYYY")
    // let aviableDays=this
  }
}
