import { Component, OnInit,OnDestroy,Input,Output, EventEmitter } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, Subscription, UnsubscriptionError } from 'rxjs';
import { SearchCryptoService } from '../search-crypto.service';

@Component({
  selector: 'app-search-crypto',
  templateUrl: './search-crypto.component.html',
  styleUrls: ['./search-crypto.component.css']
})
export class SearchCryptoComponent implements OnInit,OnDestroy {
  protected userForm: UntypedFormGroup

  protected searchCtrl: FormControl<string|null>
  @Output() searchOut = new EventEmitter<Array<string>>()
  cryptos: Array<any> = new Array<any>()
  mySub: Subscription


  constructor(private SearchCryptoService: SearchCryptoService) {
    this.searchCtrl = new FormControl<string>("")

    this.userForm = new UntypedFormGroup​

    ({​

        search: this.searchCtrl,​
​
    })
    this.mySub = this.searchCtrl.valueChanges.pipe(debounceTime(200)).subscribe(​

      (data) => this.submit()​

    );
}

  ngOnInit(): void {
    this.userForm = new UntypedFormGroup({ search: this.searchCtrl});​

  }

  ngOnDestroy(): void {
    this.mySub.unsubscribe()
  }

  submit() {
    if(this.searchCtrl.value != "") {
    this.mySub = this.SearchCryptoService.getSearchCrypto(this.searchCtrl.value).subscribe(
      (data) => {
        this.cryptos = data
        console.log(this.cryptos)
      }
    )

    }
    else {
      this.cryptos = []
      this.mySub.unsubscribe()
    }




}

}
