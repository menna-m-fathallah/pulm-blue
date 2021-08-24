import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './drop-down.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropDownComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  exports:[DropDownComponent]
  
})
export class DropDownModule { }
