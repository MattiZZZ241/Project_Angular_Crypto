import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CryptoService } from '../cryptoListe.service';
import { LoadingService } from '../loading.service';
import { CurrencySymboleService } from '../currency-symbole.service';

@Component({
  selector: 'app-crypto-all',
  templateUrl: './crypto-all.component.html',
  styleUrls: ['./crypto-all.component.css']
})
export class CryptoAllComponent implements OnInit, OnDestroy {
    loading$ = this.loader.loading$;
    currency: string = 'usd'
    order: string = 'market_cap_desc'
    search_input: string = ''
    page: string = '1'
    currencySymbole: string = '$'
    subscription1: Subscription
    subscription2: Subscription

    cryptos: Array<any> = new Array<any>()
    DisplayCryptos: Array<any> = new Array<any>()
    constructor(private cryptoService: CryptoService,public loader: LoadingService, private CurrencySymboleService: CurrencySymboleService) {
      this.subscription1 = Subscription.EMPTY;
      this.subscription2 = Subscription.EMPTY;
  }

  ngOnInit(): void {
    // subscribe to the observable and get the data from the service to have ALL the cryptos by pages
      this.subscription1 = this.cryptoService.getCryptosPerPage(this.currency,this.order,"100",this.page).subscribe(
        (data) => {
          this.cryptos = data
        }
      )
  }
  // unsubscribewhen the component is destroyed
  ngOnDestroy(): void {
    this.subscription1.unsubscribe()
    this.subscription2.unsubscribe()
  }

// function to get the symbol of the currency from the filter and the service
  filtre = (searchTabInputValueEnfant: Array<string>) : void => {
    this.currency = searchTabInputValueEnfant[0]
    this.order = searchTabInputValueEnfant[1]

    this.currencySymbole = this.CurrencySymboleService.getCurrencySymbole(this.currency)
    this.subscription2.unsubscribe()
    // subscribe to the observable and get the data from the service to have 100 cryptos by pages
    this.subscription2 = this.cryptoService.getCryptosPerPage(this.currency,this.order,"100",this.page).subscribe(
      (data) => {
          this.cryptos = data
      }
    )
  }
  // function to change the page of the cryptos list and get the data from the service to have 100 cryptos by pages
  changepage = (calc: string) : void => {
    if (calc == "plus") {
      this.page = (parseInt(this.page) + 1).toString()
    }
    else if (calc == "moins" && this.page != "1") {
      this.page = (parseInt(this.page) - 1).toString()
    }
    this.subscription2.unsubscribe()
    this.subscription2 = this.cryptoService.getCryptosPerPage(this.currency,this.order,"100",this.page).subscribe(
      (data) => {
        this.cryptos = data
      }
    )
  }
}
