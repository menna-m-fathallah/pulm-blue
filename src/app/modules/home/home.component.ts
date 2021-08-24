import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collapsedFlag = false;
  user: {}

  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
    this.user = this.sharedData.getUserData()
  }

  switchFlag(flag) {
    this.collapsedFlag = flag;
  }
}
