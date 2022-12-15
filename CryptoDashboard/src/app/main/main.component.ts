import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { CryptoService } from '../crypto.service';

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

    this.DisplayCryptos ​= this.cryptos
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
      let search = this.searchCtrl.value
      this.cryptos = this.DisplayCryptos.filter(e1 => e1.name.indexOf(search) >= 0)

      console.log(this.DisplayCryptos)​
      console.log(this.searchCtrl.value)​

  }


  Displaymessage(){

    return this.searchCtrl.value
  }
}
