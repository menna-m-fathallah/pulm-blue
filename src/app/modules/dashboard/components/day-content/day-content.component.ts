import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-content',
  templateUrl: './day-content.component.html',
  styleUrls: ['./day-content.component.scss']
})
export class DayContentComponent implements OnInit {
  @Input() obj
  constructor() { }

  ngOnInit() {
  }

  getDay(date){
    return new Date(date).getDate()
  }

}
