import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { StoreModule } from './store/store.module';

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
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
