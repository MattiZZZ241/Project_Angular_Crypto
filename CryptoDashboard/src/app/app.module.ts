import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CryptoAllComponent } from './crypto-all/crypto-all.component';
import { MainComponent } from './main/main.component';
import { CoinsinfoComponent } from './coinsinfo/coinsinfo.component';
import { FilterCryptoAllComponent } from './filter-crypto-all/filter-crypto-all.component';
import { SearchCryptoComponent } from './search-crypto/search-crypto.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './network.interceptor';
import { CryptoGraphComponent } from './crypto-graph/crypto-graph.component';

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
    CryptoGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgChartsModule
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
