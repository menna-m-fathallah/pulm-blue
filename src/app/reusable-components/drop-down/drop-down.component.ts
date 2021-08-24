import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() value ;
  @Input() list ;
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  emitValue(change){
    this.valueChange.emit(change.value)
  }
}
