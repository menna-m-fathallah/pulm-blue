import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  collapsed: boolean = false;
  access: boolean = false;
  @Output() collapsedEvent = new EventEmitter();
  constructor(private router: Router, private sharedData: SharedDataService) { }

  ngOnInit() {
    this.access = this.sharedData.getUserData()['role'] == "EMPLOYEE"
  }

  toggle() {
    this.collapsed = !this.collapsed
    const side_bar = document.getElementById('side-bar');
    side_bar.style.transition = '.05s all linear';
    if (this.collapsed) {
      side_bar.classList.add("collapsed")
      side_bar.classList.add("small-width")
      this.collapsedEvent.emit(true)
    } else {
      side_bar.style.transform = 'translate(0px)';
      side_bar.classList.remove("small-width")
      this.collapsedEvent.emit(false)
      setTimeout(() => {
        side_bar.classList.remove("collapsed")
      }, 30);
    }
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigateByUrl("/login")
  }
}


