import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent },
      { path: "cart", component: CartDetailComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
