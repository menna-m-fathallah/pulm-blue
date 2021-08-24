import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { NotificationPopupComponent } from 'src/app/reusable-components/notification-popup/notification-popup.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  dataSource = [
    { id:1 , status: 'Refused', name: '1Arjun Spencer Jr.', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:2 , status: 'Contacted', name: '2Antone Kuphal', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:3 , status: 'Didn’tContacted', name: '3Britney Kuhic', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { id:4 , status: 'Refused', name: '4Antone Kuphal An', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:5 , status: 'Contacted', name: '5Tia Simonis V', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:6 , status: 'Didn’tContacted', name: '6Oswaldo Sanford MD', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { id:7 , status: 'Refused', name: '7Glenna Daugherty', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:8 , status: 'Contacted', name: '8Kenna Lind', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { id:9 , status: 'Didn’tContacted', name: '9Fluorine Antone ka', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:10 , status: 'Refused', name: '10Neon Kuphal Antone', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { id:11 , status: 'Didn’tContacted', name: '11Arjun Spencer Jr.', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:12 , status: 'Refused', name: '12Antone Kuphal', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:13 , status: 'Refused', name: '13Britney Kuhic', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { id:14 , status: 'Contacted', name: '14Antone Kuphal Antone', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:15 , status: 'Didn’tContacted', name: '15Tia Simonis V', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:16 , status: 'Refused', name: '16Oswaldo Sanford MD', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { id:17 , status: 'Didn’tContacted', name: '17Glenna Daugherty', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:18 , status: 'Refused', name: '18Kenna Lind', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { id:19 , status: 'Contacted', name: '19Fluorine Antone ka', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { id:20 , status: 'Refused', name: '20Neon Kuphal Antone', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
  ]
  itemsPerPage = 10;
  list: { name: string; email: string; phone: string; visa: string; arrivalDate: string; }[];

  statusList = [
    { value: 'Contacted', label: 'Contacted' },
    { value: 'Didn’tContacted', label: 'Didn’t Contacted' },
    { value: 'Refused', label: 'Refused' }
  ];
  currentPage: number =1;
  itemsNumber = [
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 50, value: 50 },
    { label: 100, value: 100 }
  ]
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {

  }

  ngOnInit() {
    //get data from back end
    //make copy of data to view part of it 
    this.list = this.dataSource.slice(0, this.itemsPerPage)
    this.itemsNumber=this.itemsNumber.filter(item=> item.value <= this.dataSource.length)
  }

  addActiveStyle(event) {
    Array.from(document.getElementsByClassName("table-row")).map(row => {
      row.classList.remove("active")
    })
    let classes = Array.from(event.target.classList);
    let row = event.target
    while (classes[0] !== "table-row") {
      row = row.parentElement;
      classes = Array.from(row.classList);
    }
    row.classList.add("active")
  }

  changeItemsNumber(value) {
    this.itemsPerPage = value;
    this.list = this.dataSource.slice(this.itemsPerPage * (this.currentPage-1), this.itemsPerPage * (this.currentPage-1) + this.itemsPerPage)
  }

  updateStatus(status,row,index){
    this.list[index]["status"]=status
  }

  handlePagination(page) {
    let partOfArray = page.page - 1
    this.list = this.dataSource.slice(this.itemsPerPage * partOfArray, this.itemsPerPage * partOfArray + this.itemsPerPage)
  }

  AddEvent(event, row) {
    this.bsModalRef = this.modalService.show(NotificationPopupComponent,{class: 'notification-popup'});
  }
}
