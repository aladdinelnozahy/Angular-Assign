import { IProduct } from 'src/app/Models/iproduct';
import { ContentComponent } from './../content/content.component';
import { ICategory } from './../../Models/icategory';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {

  categoryList: ICategory[];
  SelectedCatID:number= 0;

  // property to recieve total price
  recievedOrderTotalPrice:number=0;

  prodListOfCat:IProduct[]=[];

  recievedOrderName:string="";

  recievedOrderPrice:number=0;

  recievedOrderCount:number=0;



  // save navigation operator (?)> means clientName is optional may has val or not
  //--------! >> non null assertion operation >> don't have
  // @ViewChild('clientName') clientName?:ElementRef;

  @ViewChild('clientName') clientName!:ElementRef;
  // Refrance to component
  @ViewChild(ContentComponent) contentComponentRef!:ContentComponent
  // --------------------
  // @ViewChild('clientName') clientName:ElementRef={} as ElementRef;
  //------------- in this two define must use condition---------------
  // @ViewChild('clientName') clientName:ElementRef|null=null;
  // @ViewChild('clientName') clientName:ElementRef|undefined=undefined;

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
  ngAfterViewInit(): void {
    // if(this.clientName)
    this.clientName.nativeElement.value="Value added from TS"
    console.log(this.contentComponentRef.prdListOfCat)
  }

  ngOnInit(): void {}


  // ,itemName:string,itemCount:number,itemPrice:number
  // onTotalPriceChanged(totalPrice:number){


    onTotalPriceChanged(product:any){
      this.recievedOrderTotalPrice=product;

      this.prodListOfCat.push(product)
    // this.recievedOrderName=itemName;
    // this.recievedOrderCount=itemCount;
    // this.recievedOrderPrice=itemPrice;
  }
  getNewArrOfProd(){
    console.log(this.contentComponentRef.prdListOfCat)

  }
}
