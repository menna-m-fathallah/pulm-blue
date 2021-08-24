import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotificationPopupComponent } from 'src/app/reusable-components/notification-popup/notification-popup.component';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {

  dataSource = [
    { name: '1Arjun Spencer Jr.', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', approvide:false , visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '2Antone Kuphal', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '3Britney Kuhic', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '4Antone Kuphal An', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '5Tia Simonis V', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '6Oswaldo Sanford MD', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '7Glenna Daugherty', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '8Kenna Lind', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '9Fluorine Antone ka', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '10Neon Kuphal Antone ka', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '11Arjun Spencer Jr.', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '12Antone Kuphal', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '13Britney Kuhic', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '14Antone Kuphal Antone ka', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '15Tia Simonis V', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '16Oswaldo Sanford MD', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '17Glenna Daugherty', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '18Kenna Lind', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '19Fluorine Antone ka', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '20Neon Kuphal Antone ka', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '21Arjun Spencer Jr.', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '22Antone Kuphal', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '23Britney Kuhic', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '24Antone Kuphal An', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '25Tia Simonis V', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '26Oswaldo Sanford MD', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
    { name: '27Glenna Daugherty', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'Yes', arrivalDate: 'June 17, 2019' },
    { name: '28Kenna Lind', email: 'Cristian_Rippin@hotmail.com', phone: '(501) 657-4880', visa: 'No', arrivalDate: 'June 17, 2019' },
  ]
  itemsPerPage = 10;
  currentPage = 1;
  list: { name: string; email: string; phone: string; visa: string; arrivalDate: string; }[];
  bsModalRef: BsModalRef;

  itemsNumber = [
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 50, value: 50 },
    { label: 100, value: 100 }
  ]

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    //get data from back end
    //make copy of data to view part of it 
    this.list = this.dataSource.slice(0, this.itemsPerPage)
    this.itemsNumber=this.itemsNumber.filter(item=> item.value <= this.dataSource.length)
  }

  handlePagination(page) {
    let partOfArray = page.page - 1
    this.list = this.dataSource.slice(this.itemsPerPage * partOfArray, this.itemsPerPage * partOfArray + this.itemsPerPage)
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

  approveUser(event, rowData) {
    event.target.classList.add("active-icon") ;
    //set requset for backend to approveUser 
    

  }

  AddEvent(event, row) {
    this.bsModalRef = this.modalService.show(NotificationPopupComponent,{class: 'notification-popup'});
  }

  changeItemsNumber(value) {
    this.itemsPerPage = value;
    this.list = this.dataSource.slice(this.itemsPerPage * (this.currentPage-1), this.itemsPerPage * (this.currentPage-1) + this.itemsPerPage)
  }

}

