import { IProduct } from 'src/app/Models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductList: IProduct[];

  constructor() {
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
  }
// get all prod
  getAllProducts():IProduct[]{
    return this.ProductList;
  }
  getProductsByCatID(CategoryID:number):IProduct[]{
    if(CategoryID==0){
      return this.getAllProducts();
    }
    else{
      return this.ProductList.filter(prod=>prod.CategoryID==CategoryID);
    }
  }

}

