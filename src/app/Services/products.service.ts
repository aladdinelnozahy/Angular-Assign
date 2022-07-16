import { environment } from './../../environments/environment';
import { IProduct } from 'src/app/Models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// api 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient:HttpClient) { }
  getAllProducts():Observable<IProduct[]>{
   return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/products`)
  }


  getProductsByCatID(catID:number):Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/products?CategoryID=${catID}`)
   }

   getProductByID(prodID:number):Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/products/${prodID}`)
   }


}
