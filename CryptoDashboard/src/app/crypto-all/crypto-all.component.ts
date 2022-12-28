import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, delay, Subscription, UnsubscriptionError } from 'rxjs';
import { CryptoService } from '../cryptoListe.service';

@Component({
  selector: 'app-crypto-all',
  templateUrl: './crypto-all.component.html',
  styleUrls: ['./crypto-all.component.css']
})
export class CryptoAllComponent implements OnInit, OnDestroy {

  currency: string = 'usd'
  order: string = 'market_cap_desc'
  search_input: string = ''
  page: string = '1'
  subscription1: Subscription
  subscription2: Subscription

  cryptos: Array<any> = new Array<any>()
  DisplayCryptos: Array<any> = new Array<any>()
  constructor(private cryptoService: CryptoService) {
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
  console.log("unsubscribeallcryptoall")
}

search = (searchTabInputValueEnfant: Array<string>) : void => {

  //this.search_input = searchTabInputValueEnfant[0]
  this.currency = searchTabInputValueEnfant[0]
  this.order = searchTabInputValueEnfant[1]

  this.subscription2 = this.cryptoService.getCryptosPerPage(this.currency,this.order,"100",this.page).subscribe(
    (data) => {
        //this.checkIdOrSymbol(this.search_input.toLowerCase())
        this.cryptos = data
    }
  )



}



/*getAllCrypto(){
  while(parseInt(this.page) < 10 ){
    this.page = (parseInt(this.page) + 1).toString()
    this.cryptoService.getCryptosPerPage(this.currency,this.order,"100",this.page).subscribe(
      (data) => {
        this.DisplayCryptos = this.DisplayCryptos.concat(data)
        console.log(this.cryptos)
        console.log(this.DisplayCryptos)
      }
    )
}
}*/

/*checkIdOrSymbol(search : string){

    switch (this.DisplayCryptos.filter(e1 => e1.name.toLowerCase().indexOf(search) >= 0).length ){

      case 0:
          if(this.DisplayCryptos.filter(e1 => e1.symbol.toLowerCase().indexOf(search) >= 0).length > 0){
            this.cryptos = this.DisplayCryptos.filter(e1 => e1.symbol.toLowerCase().indexOf(search) >= 0)
          }else {
            console.log("nope")
          }
        break

      default:
          this.cryptos = this.DisplayCryptos.filter(e1 => e1.name.toLowerCase().indexOf(search) >= 0)
        break
    }
  }*/


}
