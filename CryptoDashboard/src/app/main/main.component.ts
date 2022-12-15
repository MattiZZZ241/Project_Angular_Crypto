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
  name_parent: string
  mySub: Subscription

  protected userForm: UntypedFormGroup​

  protected searchCtrl: FormControl<string|null>​​


  constructor(private cryptoService: CryptoService) {
    this.name_parent = ""

    this.searchCtrl = new FormControl<string>("")​

    this.userForm = new UntypedFormGroup​

    ({​

        search: this.searchCtrl,​
​

    })
    this.userForm = new UntypedFormGroup({ search: this.searchCtrl});​
    this.mySub = this.searchCtrl.valueChanges.pipe(debounceTime(1000)).subscribe(​

      (data) => this.submit()​

  );
}
​

ngOnInit(): void {​

    this.cryptoService.getCryptos().subscribe(
    x => this.cryptos = x

    )

    this.DisplayCryptos ​= this.cryptos
    this.userForm = new UntypedFormGroup({ search: this.searchCtrl});​
}
  onName = (message: string) : void => {
    console.log(message)
    this.name_parent = message
  }

  childName = () : string => {
    return this.name_parent
  }



  submit() {
      let search = this.searchCtrl.value
      this.cryptos = this.DisplayCryptos.filter(e1 => e1.name.indexOf(search) >= -1 )

      console.log(this.DisplayCryptos)​
      console.log(this.searchCtrl.value)​

  }


  Displaymessage(){

    return this.searchCtrl.value
  }
}
