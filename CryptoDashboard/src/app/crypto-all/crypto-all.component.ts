import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, delay, Subscription, UnsubscriptionError } from 'rxjs';
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
​

ngOnInit(): void {

    this.subscription1 = this.cryptoService.getCryptosPerPage(this.currency,this.order,"100",this.page).subscribe(
      (data) => {
        this.cryptos = data

      }

    )

}

ngOnDestroy(): void {
  this.subscription1.unsubscribe()
  this.subscription2.unsubscribe()
}

search = (searchTabInputValueEnfant: Array<string>) : void => {

  this.currency = searchTabInputValueEnfant[0]
  this.order = searchTabInputValueEnfant[1]
  this.currencySymbole = this.CurrencySymboleService.getCurrencySymbole(this.currency)
  this.subscription2.unsubscribe()

  this.subscription2 = this.cryptoService.getCryptosPerPage(this.currency,this.order,"100",this.page).subscribe(
    (data) => {
        this.cryptos = data
    }
  )
}
}
