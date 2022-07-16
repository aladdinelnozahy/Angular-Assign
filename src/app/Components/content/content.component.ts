import { ProductsService } from './../../Services/products.service';
import { ProductService } from './../../Services/product.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { DiscountOffers, IProduct } from 'src/app/Models/iproduct';
import { ICategory } from 'src/app/Models/icategory';
import { Store } from 'src/app/Models/store';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  // providers:[ProductService]
})
export class ContentComponent implements OnInit, OnChanges{
  ProductList: IProduct[];
  // ICategory: ICategory[];
  buybroduct:any={}
  todayDate:Date=new Date();
  prdListOfCat:IProduct[]=[];
  ClientName: string = ""
  store1 = new Store('H&M', 'https://fakeimg.pl/250x100', []);
  IsPurshased: Boolean = false;
  category:string="good";// test day 2
  // ICategory: ICategory[];
  Discount: DiscountOffers = DiscountOffers['10%'];
  orderTotalPrice:number=0
  orderItemName:string=""
  orderItemCount:number=0
  orderItemPrice:number=0

  @Input() receivedCatID:number=0 //add Input property to handle with another component // parent to child
  @Output() totalPriceChanged:EventEmitter<{}>; // child to parent

  // @Output() nameChanged:EventEmitter<string>; // child to parent
  // @Output() totalPriceChanged:EventEmitter<number>; // child to parent
  // @Output() totalPriceChanged:EventEmitter<number>; // child to parent





  constructor(private prodService:ProductService, private router:Router,private prdAPIservice:ProductsService) {
  // constructor() {
      this.totalPriceChanged=new EventEmitter<{}>();
    this.ProductList = prodService.getAllProducts();

    // [
    //   {
    //     ID: 1,
    //     Name: 'fan',
    //     Quantity: 0,
    //     Price: 200,
    //     Img: 'https://fakeimg.pl/250x100',
    //     CategoryID: 1
    //   },
      // {
      //   ID: 2,
      //   Name: 'TV',
      //   Quantity: 1,
      //   Price: 4000,
      //   Img: 'https://fakeimg.pl/250x100',
      //   CategoryID: 1
      // },
      // {
      //   ID: 3,
      //   Name: 'BMW',
      //   Quantity: 3,
      //   Price: 50,
      //   Img: 'https://fakeimg.pl/250x100',
      //   CategoryID: 2
      // },
      // {
      //   ID: 4,
      //   Name: 'ferrari',
      //   Quantity: 8,
      //   Price: 100,
      //   Img: 'https://fakeimg.pl/250x100',
      //   CategoryID: 2
      // },
      // {
      //   ID: 5,
      //   Name: 'T-Shirt',
      //   Quantity: 8,
      //   Price: 10,
      //   Img: 'https://fakeimg.pl/250x100',
      //   CategoryID: 3
      // },
      // {
      //   ID: 6,
      //   Name: 'Jeans',
      //   Quantity: 15,
      //   Price: 80,
      //   Img: 'https://fakeimg.pl/250x100',
      //   CategoryID: 3
      // },
      // {
      //   ID: 7,
      //   Name: 'Braclet',
      //   Quantity: 8,
      //   Price: 10,
      //   Img: 'https://fakeimg.pl/250x100',
      //   CategoryID: 4
      // },
      // {
      //   ID: 8,
      //   Name: 'necklace ',
      //   Quantity: 1,
      //   Price: 10,
      //   Img: 'https://fakeimg.pl/250x100',
      //   CategoryID: 4
      // },
      // {
      //   ID: 9,
      //   Name: 'Baby Bottles ',
      //   Quantity: 1,
      //   Price: 10,
      //   Img: 'https://fakeimg.pl/250x100',
      //   CategoryID: 5
      // },
      // {
      //   ID: 10,
      //   Name: 'Sleep suites ',
      //   Quantity: 0,
      //   Price: 10,
      //   Img: 'https://fakeimg.pl/250x100',
      //   CategoryID: 5
      // }
    // ]
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
  private getProductOfCat(){
    if(this.receivedCatID==0){
      this.prdListOfCat=Array.from(this.ProductList)
      return;
    }
    this.prdListOfCat= this.ProductList.filter((product)=>product.CategoryID==this.receivedCatID);

  }
  ngOnChanges(changes: SimpleChanges): void {

    // this.getProductOfCat();
    // day 5
    this.prdAPIservice.getProductsByCatID(this.receivedCatID).subscribe(data=>{
      this.prdListOfCat=data;
    })
  }
  ngOnInit(): void {
    // this.getProductOfCat();
    // day 5
    this.prdAPIservice.getAllProducts().subscribe(prdList=>{
      this.prdListOfCat=prdList;
    })
  }
  tracking(index:number,item:IProduct){
    return item.ID
  }

  clear(){
    this.ProductList= this.prdListOfCat;
  }
  buy(product:any){
   // console.log(username);
    // product.Quantity=product.Quantity-username.value;
    this.buybroduct=product
  }
  updateTotalPrice(itemsCount:any,product:IProduct){
    // this.orderTotalPrice+=(prodPrice*itemsCount)
    // this.orderTotalPrice+=(prodPrice*parseInt(itemsCount))
    // this.orderTotalPrice+=(prodPrice*Number(itemsCount))
    // this.orderTotalPrice+=(prodPrice*itemsCount as number)
    console.log(product);
    this.orderTotalPrice+=(product.Price* +itemsCount);

    // this.orderItemPrice=prodPrice;
    // this.orderItemCount=itemsCount;
    // this.orderItemName=`itemName
    this.orderItemName=product.Name;
    this.orderItemCount=parseInt(itemsCount);
    this.orderItemPrice=product.Price;

    let prod:any={
      Name: product.Name,
      Price: product.Price,
      Count: itemsCount,
      TotalPrice:this.orderTotalPrice

    }
    this.totalPriceChanged.emit(prod);             //emit() fire and change

    // this.totalPriceChanged.emit({...product,...{totalPrice:this.orderTotalPrice}});             //emit() fire and change
    // this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  handleBuyAction() {

    this.IsPurshased = true
  }

  openProductDetails(prodID:number){
    this.router.navigate(['Products',prodID])
  }
  addProduct(prod:IProduct){
    this.ProductList.push(prod)
  }
}
