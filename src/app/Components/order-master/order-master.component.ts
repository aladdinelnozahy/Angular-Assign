import { ICategory } from './../../Models/icategory';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {

  categoryList: ICategory[];
  SelectedCatID:number= 0;

  // property to recieve total price
  recievedOrderTotalPrice:number=0;

  constructor() {
    this.categoryList=
    [
      {ID: 1, Name: 'Electro'},
      {ID: 2, Name: 'vehicles'},
      {ID: 3, Name: 'clothes'},
      {ID: 4, Name: 'accessories'},
      {ID: 5, Name: 'baby'}
    ]
  }

  ngOnInit(): void {
  }
  onTotalPriceChanged(totalPrice:number){
    this.recievedOrderTotalPrice=totalPrice;
  }
}
