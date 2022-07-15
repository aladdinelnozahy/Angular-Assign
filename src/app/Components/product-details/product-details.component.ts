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
  currentProdID:number=0;
  currentIndex:number=0
  prodIDList:number[]=[]






  constructor(private prodService:ProductService,private router:Router,private activateRoute:ActivatedRoute,private location:Location) { }

  ngOnInit(): void {
    // let sendProdID=this.activateRoute.snapshot.paramMap.get('pid');
    // console.log(sendProdID);




    //
    // let sendProdID:number=(this.activateRoute.snapshot.paramMap.get('pid'))?Number(this.activateRoute.snapshot.paramMap.get('pid')):0
    // let foundedProd=this.prodService.getProductByID(sendProdID);
    // if(foundedProd){
    //   this.prod=foundedProd;
    //   console.log(this.prod)
    // }else{
    //   alert("Product Not Found");
    //   this.location.back()
    // }

    //------- day 5 ---------
    this.prodIDList=this.prodService.getProducsIDList();
    // got list of ids  and find index compare with the current ID
    // this.currentIndex= this.prodIDList.findIndex((item)=>item==this.currentProdID);

    this.currentProdID=(this.activateRoute.snapshot.paramMap.get('pid'))?Number(this.activateRoute.snapshot.paramMap.get('pid')):0
    let foundedProd=this.prodService.getProductByID(this.currentProdID);


    this.activateRoute.paramMap.subscribe(
      paraMap=>{
        this.currentProdID=(paraMap.get('pid'))?Number(paraMap.get('pid')):0;
          let foundedProd=this.prodService.getProductByID(this.currentProdID);
          if(foundedProd){
            this.prod=foundedProd;
            console.log(this.prod)
          }else{
            alert("Product Not Found");
            this.location.back()
          }
      }
    )
  }













  goPrev(){
    this.currentIndex= this.prodIDList.findIndex((item)=>item==this.currentProdID);
    this.router.navigate(['/Products',this.prodIDList[--this.currentIndex]])
  }
  goBack(){
    this.location.back()
  }

  goNext(){
    this.currentIndex= this.prodIDList.findIndex((item)=>item==this.currentProdID);
    this.router.navigate(['/Products',this.prodIDList[++this.currentIndex]])

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
