import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { SearchCryptoService } from '../search-crypto.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-search-crypto',
  templateUrl: './search-crypto.component.html',
  styleUrls: ['./search-crypto.component.css']
})
export class SearchCryptoComponent implements OnInit,OnDestroy {
  loading$ = this.loader.loading$;
  protected userForm: UntypedFormGroup
  protected searchCtrl: FormControl<string|null>
  cryptos: Array<any> = new Array<any>()
  mySub: Subscription

  constructor(private SearchCryptoService: SearchCryptoService, public loader: LoadingService) {


    this.searchCtrl = new FormControl<string>("")
    this.userForm = new UntypedFormGroup​
    ({​
        search: this.searchCtrl,​
    })
    this.mySub = Subscription.EMPTY;
}

  ngOnInit(): void {
    // subscribe to the observable and when the value search change , call the submit function
    this.mySub = this.searchCtrl.valueChanges.pipe(debounceTime(200)).subscribe(​

      (data) => this.submit()
    );

    // function with the formControl to get the value of the search
    this.userForm = new UntypedFormGroup({ search: this.searchCtrl});​

  }
// unsubscribe to the observable when the component is destroyed
  ngOnDestroy(): void {
    this.mySub.unsubscribe()
  }
// function to get the value of the search and call the service to get the data
  submit() {
    if(this.searchCtrl.value != "") {
    this.mySub = this.SearchCryptoService.getSearchCrypto(this.searchCtrl.value).subscribe(
      (data) => {
        this.cryptos = data
      })
    }
    else {
      this.cryptos = []
      this.mySub.unsubscribe()
    }
}
}
