import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { IndexComponent } from './Components/index/index.component';
import { ContentComponent } from './Components/content/content.component';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { OrderMasterComponent } from './Components/order-master/order-master.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    IndexComponent,
    ContentComponent,
    ProductCardDirective,
    OrderMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
