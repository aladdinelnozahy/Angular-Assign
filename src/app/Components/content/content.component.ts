import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { DiscountOffers, IProduct } from 'src/app/Models/iproduct';
import { ICategory } from 'src/app/Models/icategory';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'products',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnChanges{

  todayDate:Date=new Date();
  prdListOfCat:IProduct[]=[];
  @Input() receivedCatID:number=0 //add Input property to handle with another component // parent to child
  ClientName: string = ""
  store1 = new Store('H&M', 'https://fakeimg.pl/250x100', []);
  ProductList: IProduct[];
  IsPurshased: Boolean = false;
  category:string="good";// test day 2
  // ICategory: ICategory[];
  Discount: DiscountOffers = DiscountOffers['10%'];
  orderTotalPrice:number=0

  @Output() totalPriceChanged:EventEmitter<number>; // child to parent
  constructor() {
    this.totalPriceChanged=new EventEmitter<number>();
    this.ProductList = [
      {
        ID: 1,
        Name: 'fan',
        Quantity: 0,
        Price: 200,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 1
      },
      {
        ID: 2,
        Name: 'TV',
        Quantity: 1,
        Price: 4000,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 1
      },
      {
        ID: 3,
        Name: 'BMW',
        Quantity: 3,
        Price: 50,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 2
      },
      {
        ID: 4,
        Name: 'ferrari',
        Quantity: 8,
        Price: 100,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 2
      },
      {
        ID: 5,
        Name: 'T-Shirt',
        Quantity: 8,
        Price: 10,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 3
      },
      {
        ID: 6,
        Name: 'Jeans',
        Quantity: 15,
        Price: 80,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 3
      },
      {
        ID: 7,
        Name: 'Braclet',
        Quantity: 8,
        Price: 10,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 4
      },
      {
        ID: 8,
        Name: 'necklace ',
        Quantity: 1,
        Price: 10,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 4
      },
      {
        ID: 9,
        Name: 'Baby Bottles ',
        Quantity: 1,
        Price: 10,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 5
      },
      {
        ID: 10,
        Name: 'Sleep suites ',
        Quantity: 0,
        Price: 10,
        Img: 'https://fakeimg.pl/250x100',
        CategoryID: 5
      }
    ]
    // this.ICategory=
    // [
    //   {
    //     ID: 1,
    //     Name: 'Electro'
    //   },
    //   {
    //     ID: 2,
    //     Name: 'vehicles'
    //   },
    //   {
    //     ID: 3,
    //     Name: 'clothes'
    //   },
    //   {
    //     ID: 4,
    //     Name: 'accessories'
    //   },
    //   {
    //     ID: 5,
    //     Name: 'baby'
    //   }
    // ]

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProductOfCat();
  }
  ngOnInit(): void {
    // this.getProductOfCat();
  }
  tracking(index:number,item:IProduct){
    return item.ID
  }
  private getProductOfCat(){
    if(this.receivedCatID==0){
      this.prdListOfCat=Array.from(this.ProductList)
      return;
    }
    this.prdListOfCat= this.ProductList.filter((product)=>product.CategoryID==this.receivedCatID);

  }

  updateTotalPrice(prodPrice: number,itemsCount:any){
    // this.orderTotalPrice+=(prodPrice*itemsCount)
    // this.orderTotalPrice+=(prodPrice*parseInt(itemsCount))
    // this.orderTotalPrice+=(prodPrice*Number(itemsCount))
    // this.orderTotalPrice+=(prodPrice*itemsCount as number)
    this.orderTotalPrice+=(prodPrice* +itemsCount);
    // fire event
    this.totalPriceChanged.emit(this.orderTotalPrice);             //emit() fire and change
  }

  handleBuyAction() {

    this.IsPurshased = true
  }


}
