import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RequsetService } from 'src/app/services/requset.service';
import gql from 'graphql-tag';
import { SharedDataService } from 'src/app/services/shared-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loader: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private requset: RequsetService, private sharedData: SharedDataService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  submit(data) {
    this.loader = true;
    const submitRepository = gql`
    mutation { login (
        email: "${data.email}"
        password: "${data.password}"
      ) {
        token
        user {
          id
          name
          email
          role
        }
      }
    }`;
    this.requset.handleMutation(submitRepository).subscribe(res => {
      let response = res["data"]["login"];
      this.sharedData.setUserData(response["user"]);
      this.sharedData.setToken(response["token"]);
      this.router.navigateByUrl("/home");
    });
  }

}
