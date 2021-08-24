import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {
  eventForm: FormGroup;
  today = new Date()
  date = this.today
  time = this.formatAMPM(this.today) ;
  hours = this.formatAMPM(this.today)
  calenderView = false;
  clockView = false;
  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: ['', [Validators.required]],
      date :[this.today],
      time:[this.formatAMPM(this.today)]
    });
  }

  ngOnInit() {

  }
  openCalenderView() {
    this.calenderView = true;
  }

  closeCalenderView(event) {
    this.date = event
    this.calenderView = false;
  }

  closeClockView(event) {
    this.hours = this.eventForm.controls.time.value
    this.time = this.formatAMPM(this.eventForm.controls.time.value)
    this.clockView = false;
  }

  openClockView() {
    this.clockView = true;
  }

  close() {
    this.bsModalRef.hide()
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  submit(){
    
  }
}
