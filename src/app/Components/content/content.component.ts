import { Component, OnInit } from '@angular/core';
import { DiscountOffers, IProduct } from 'src/app/Models/iproduct';
import { ICategory } from 'src/app/Models/icategory';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  ClientName:string=""
  store1 = new Store('Aladdin', 'https://fakeimg.pl/250x100', []);
  ProductList:IProduct[];
  IsPurshased :Boolean =false;
  ICategory:ICategory={
  ID:5,
  Name:'Electro'
}
  Discount:DiscountOffers= DiscountOffers['10%'];

  constructor() {
    this.ProductList=[
      {ID:1,
        Name:'milk',
        Quantity:5,
        Price:200,
        Img:'https://fakeimg.pl/250x100',
        CategoryID:4},
        {ID:1,
          Name:'egg',
          Quantity:2,
          Price:3000,
          Img:'https://fakeimg.pl/250x100',
          CategoryID:3}
    ];

  }

  ngOnInit(): void {

  }

  handleBuyAction() {

    this.IsPurshased=true
  }


}
