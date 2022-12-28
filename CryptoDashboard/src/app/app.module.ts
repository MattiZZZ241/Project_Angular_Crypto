import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CryptoAllComponent } from './crypto-all/crypto-all.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoinsinfoComponent } from './coinsinfo/coinsinfo.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterCryptoAllComponent } from './filter-crypto-all/filter-crypto-all.component';
import { SearchCryptoComponent } from './search-crypto/search-crypto.component'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './network.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    CryptoAllComponent,
    MainComponent,
    CoinsinfoComponent,
    FilterCryptoAllComponent,
    SearchCryptoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
 ],
  bootstrap: [AppComponent],
})
export class AppModule { }
