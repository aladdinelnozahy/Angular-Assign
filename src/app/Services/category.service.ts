import { environment } from './../../environments/environment';
import { ICategory } from 'src/app/Models/icategory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// api
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient) { }
  getAllCategories():Observable<ICategory[]>{
   return this.httpclient.get<ICategory[]>(`${environment.APIBaseURL}`)
  }
}
