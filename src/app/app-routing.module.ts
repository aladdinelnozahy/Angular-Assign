import { ContentComponent } from './Components/content/content.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';

const routes: Routes = [
{path:'',component:MainLayoutComponent, children:[
// {path:'Main',component:MainLayoutComponent, children:[

  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomePageComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'ContactUs',component:ContactUsComponent},

  {path:'Products',component:OrderMasterComponent},
  {path:'Products/:pid',component:ProductDetailsComponent},
  {path:'Order',component:ContentComponent}


]},
// {},
{path:'**',component:NotFoundPageComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
