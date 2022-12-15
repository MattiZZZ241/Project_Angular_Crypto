import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SingleCryptoInListComponent } from './single-crypto-in-list/single-crypto-in-list.component';
import { AllCryptoInListComponent } from './all-crypto-in-list/all-crypto-in-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SingleCryptoInListComponent,
    AllCryptoInListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
