import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // get data from url and send a req
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params.id;
    });
  }

}
