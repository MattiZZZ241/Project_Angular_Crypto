import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  @Input() name:string
  @Input() symbol:string
  @Output() nameOut = new EventEmitter<string>()


  click_number: number
  hide: boolean



  constructor() {
    this.name = "Name"
    this.symbol = "none"
    this.click_number = 0
    this.hide = true
}

  ngOnInit(): void {

  }

  isHidden = () : boolean => {
    return this.hide;
  }

  onClick = () : void => {
    this.click_number++;
    this.hide = ! this.hide
    console.log(this.click_number)
    this.nameOut.emit(this.name)
  }

}
