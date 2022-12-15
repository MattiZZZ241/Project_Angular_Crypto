import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-crypto-list',
  templateUrl: './all-crypto-list.component.html',
  styleUrls: ['./all-crypto-list.component.css']
})
export class AllCryptoComponent implements OnInit {

  protected userForm: UntypedFormGroup​

  protected searchCtrl: FormControl<string>​​

  constructor() {​
      this.searchCtrl = new FormControl()​

      this.userForm = new UntypedFormGroup​

      ({​

          search: this.searchCtrl,​
​

      })
      this.userForm = new UntypedFormGroup({ search: this.searchCtrl});​

  }

  ngOnInit() : void{

  }

  submit() {

      console.log(this.userForm.value)​

      console.log(this.searchCtrl.value)​

  }

}
