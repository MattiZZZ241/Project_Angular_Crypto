import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, EMPTY, Subscription, UnsubscriptionError } from 'rxjs';
import { CryptoService } from '../cryptoListe.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor() {​

  }

  ngOnInit() : void{

  }
}
