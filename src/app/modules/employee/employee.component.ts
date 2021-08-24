import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;


  constructor(private fb: FormBuilder,private router:Router) { }


  ngOnInit() {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      role: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  submit(data) {
    this.router.navigateByUrl("/home")
    // alert(data.value.email+" "+data.value.password)
  }

}
