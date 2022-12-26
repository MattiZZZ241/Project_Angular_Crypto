import { Component, OnInit,Input } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, Subscription, UnsubscriptionError } from 'rxjs';
import { CryptoService } from '../cryptoListe.service';

@Component({
  selector: 'app-crypto-all',
  templateUrl: './crypto-all.component.html',
  styleUrls: ['./crypto-all.component.css']
})
export class CryptoAllComponent implements OnInit {

  currency: string = 'usd'
  order: string = 'market_cap_desc'
  search_input: string = ''


  cryptos: Array<any> = new Array<any>()
  DisplayCryptos: Array<any> = new Array<any>()
  constructor(private cryptoService: CryptoService) {

}
​

ngOnInit(): void {​

    this.cryptoService.getCryptos(this.currency,this.order).subscribe(
      (data) => {
        this.cryptos = data
        this.DisplayCryptos = data
      }
    )
    console.log("yolo")

}

search = (searchTabInputValueEnfant: Array<string>) : void => {

  this.search_input = searchTabInputValueEnfant[0]
  this.currency = searchTabInputValueEnfant[1]
  this.order = searchTabInputValueEnfant[2]

  this.cryptoService.getCryptos(this.currency,this.order).subscribe(
    (data) => {
      this.cryptos = data
      this.DisplayCryptos = data
    }
  )
  console.log("yep")


  this.checkIdOrSymbol(this.search_input.toLowerCase())

}


checkIdOrSymbol(search : string){

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
  }


}
