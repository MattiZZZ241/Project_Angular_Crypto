import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, Subscription, UnsubscriptionError } from 'rxjs';
import { CryptoService } from '../cryptoListe.service';

@Component({
  selector: 'app-crypto-all',
  templateUrl: './crypto-all.component.html',
  styleUrls: ['./crypto-all.component.css']
})
export class CryptoAllComponent implements OnInit {
  cryptos: Array<any> = new Array<any>()
  DisplayCryptos: Array<any> = new Array<any>()
  id_parent: string
  mySub: Subscription

  protected userForm: UntypedFormGroup​

  protected searchCtrl: FormControl<string|null>​​


  constructor(private cryptoService: CryptoService) {
    this.id_parent = ""

    this.searchCtrl = new FormControl<string>("")​

    this.userForm = new UntypedFormGroup​

    ({​

        search: this.searchCtrl,​
​

    })
    this.mySub = this.searchCtrl.valueChanges.pipe(debounceTime(1000)).subscribe(​

      (data) => this.submit()​

  );
}
​

ngOnInit(): void {​

    this.cryptoService.getCryptos().subscribe(
      (data) => {
        this.cryptos = data
        this.DisplayCryptos = data
      }
    )

    this.userForm = new UntypedFormGroup({ search: this.searchCtrl});​
}
  onId = (id: string) : void => {
    console.log(id)
    this.id_parent = id
  }

  childName = () : string => {
    return this.id_parent
  }



  submit() {
      let search = this.searchCtrl.value?.toLowerCase() || ""

      //pour la barre de recherche lorsqu'on écrit dedans (ne pas enlver c'est pour plus tard)
      /*this.cryptoService.postSearchCrypto(search).subscribe(
        (data) => {
          this.cryptos = data
        }
      )*/

        // number of letter search > 4 -> faut changer ça

        if (search.length > 4){
          search = search.charAt(0).toUpperCase() + search.slice(1)
          this.cryptos = this.DisplayCryptos.filter(e1 => e1.name.indexOf(search) >= 0)

        } else{
          this.cryptos = this.DisplayCryptos.filter(e1 => e1.symbol.indexOf(search) >= 0)

        }

      console.log(this.cryptos)​
      console.log(this.DisplayCryptos)​
      console.log(search)​

  }



}