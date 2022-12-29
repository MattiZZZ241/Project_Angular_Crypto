import { Component, OnInit,OnDestroy,Input,Output, EventEmitter } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, Subscription, UnsubscriptionError } from 'rxjs';
import { CurrencySymboleService } from '../currency-symbole.service';
import { OrderfiltreService } from '../orderfiltre.service';

@Component({
  selector: 'app-filter-crypto-all',
  templateUrl: './filter-crypto-all.component.html',
  styleUrls: ['./filter-crypto-all.component.css']
})
export class FilterCryptoAllComponent implements OnInit,OnDestroy {
  protected userForm: UntypedFormGroup
  currencies: Array<string> = new Array<string>()
  orders: Array<string> = new Array<string>()​

  protected filterCurrency: FormControl<string|null>
  protected filterOrder: FormControl<string|null>

  subscription1: Subscription
  subscription2: Subscription

  @Output() searchOut = new EventEmitter<Array<string>>()

  FilterTable : Array<string> = new Array<string>()

  constructor(private CurrencySymboleService: CurrencySymboleService, private OrderfiltreService: OrderfiltreService) {


    this.filterCurrency = new FormControl<string>("usd")
    this.filterOrder = new FormControl<string>("market_cap_desc")
    this.currencies = this.CurrencySymboleService.getCurrency()
    this.orders = this.OrderfiltreService.getOrder()




    this.userForm = new UntypedFormGroup​

    ({​

        filterCurrency : this.filterCurrency,​
        filterOrder : this.filterOrder
​
    })

    this.subscription1 = this.filterCurrency.valueChanges.subscribe(​

      (data) => this.submit()
      ​

    );
    this.subscription2 = this.filterOrder.valueChanges.subscribe(​

    (data) => this.submit()
    ​

    );
    this.subscription2 = Subscription.EMPTY;

  }

  ngOnInit(): void {
    this.userForm = new UntypedFormGroup({ filterCurrency: this.filterCurrency, filterOrder: this.filterOrder});​

  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe()
    this.subscription2.unsubscribe()


  }

  submit() {

      this.FilterTable[0] = this.filterCurrency.value || "usd"
      this.FilterTable[1] = this.filterOrder.value || "market_cap_desc"

      this.searchOut.emit(this.FilterTable)

}


}
