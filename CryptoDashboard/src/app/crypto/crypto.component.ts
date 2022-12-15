import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  @Input() name:string
  @Input() id:string
  @Input() symbol:string
  @Input() image:string
  @Input() current_price:string
  @Input() market_cap:string
  @Input() market_cap_rank:string
  @Output() idOut = new EventEmitter<string>()


  click_number: number
  hide: boolean



  constructor() {
    this.name = "Name"
    this.id = "none"
    this.symbol = "none"
    this.image = "none"
    this.current_price = "none"
    this.market_cap = "none"
    this.market_cap_rank = "none"
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
    this.idOut.emit(this.id)
  }

}
