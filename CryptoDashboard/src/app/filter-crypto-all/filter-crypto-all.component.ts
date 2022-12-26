import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, Subscription, UnsubscriptionError } from 'rxjs';

@Component({
  selector: 'app-filter-crypto-all',
  templateUrl: './filter-crypto-all.component.html',
  styleUrls: ['./filter-crypto-all.component.css']
})
export class FilterCryptoAllComponent implements OnInit {
  protected userForm: UntypedFormGroup​

  protected filterCurrency: FormControl<string|null>
  protected filterOrder: FormControl<string|null>

  mySub: Subscription

  @Output() searchOut = new EventEmitter<Array<string>>()

  FilterTable : Array<string> = new Array<string>()

  constructor() {


    this.filterCurrency = new FormControl<string>("usd")
    this.filterOrder = new FormControl<string>("market_cap_desc")


    this.userForm = new UntypedFormGroup​

    ({​

        filterCurrency : this.filterCurrency,​
        filterOrder : this.filterOrder
​
    })

    this.mySub = this.filterCurrency.valueChanges.subscribe(​

      (data) => this.submit()​

    );
    this.mySub = this.filterOrder.valueChanges.subscribe(​

    (data) => this.submit()​

    );

  }

  ngOnInit(): void {
    this.userForm = new UntypedFormGroup({ filterCurrency: this.filterCurrency, filterOrder: this.filterOrder});​

  }

  submit() {
    //pour la barre de recherche lorsqu'on écrit dedans (ne pas enlver c'est pour plus tard)
    /*this.cryptoService.postSearchCrypto(search).subscribe(
      (data) => {
        this.cryptos = data
      }
    )*/

      //this.FilterTable[0] = this.searchCtrl.value?.toLowerCase() || ""
      this.FilterTable[0] = this.filterCurrency.value || "usd"
      this.FilterTable[1] = this.filterOrder.value || "market_cap_desc"

      this.searchOut.emit(this.FilterTable)

}



}
