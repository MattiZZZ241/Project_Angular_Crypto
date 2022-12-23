import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, EMPTY, Subscription, UnsubscriptionError } from 'rxjs';
import { CryptoService } from '../cryptoListe.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
      //pour la barre de recherche lorsqu'on écrit dedans (ne pas enlver c'est pour plus tard)
      /*this.cryptoService.postSearchCrypto(search).subscribe(
        (data) => {
          this.cryptos = data
        }
      )*/

      this.checkIdOrSymbol(this.searchCtrl.value?.toLowerCase() || "")

  }

  checkIdOrSymbol(search : string){

      switch (this.DisplayCryptos.filter(e1 => e1.name.toLowerCase().indexOf(search) >= 0).length ){

        case 0:
            if(this.DisplayCryptos.filter(e1 => e1.symbol.toLowerCase().indexOf(search) >= 0).length > 0){
              this.cryptos = this.DisplayCryptos.filter(e1 => e1.symbol.toLowerCase().indexOf(search) >= 0)
            }else {
              alert("Aucun résultat")
            }
          break

        default:
          this.cryptos = this.DisplayCryptos.filter(e1 => e1.name.toLowerCase().indexOf(search) >= 0)
          break
      }
    }
  }
