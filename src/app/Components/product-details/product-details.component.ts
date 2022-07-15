import { IProduct } from 'src/app/Models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
//
  prod:IProduct|undefined=undefined;
  constructor(private prodService:ProductService,private router:Router,private activateRoute:ActivatedRoute,private location:Location) { }

  ngOnInit(): void {
    // let sendProdID=this.activateRoute.snapshot.paramMap.get('pid');
    // console.log(sendProdID);

    let sendProdID:number=(this.activateRoute.snapshot.paramMap.get('pid'))?Number(this.activateRoute.snapshot.paramMap.get('pid')):0
    let foundedProd=this.prodService.getProductByID(sendProdID);
    if(foundedProd){
      this.prod=foundedProd;
      console.log(this.prod)
    }else{
      alert("Product Not Found");
      this.location.back()
    }
  }
  goBack(){
    this.location.back()

  }
  searchProduct(prodName:string){
  let found=  this.prodService.searchProductByName(prodName);
    // console.log(found);
    if(found){
      this.prod=found
    }else{
      alert("Product Not Found")
    }

  }
}
