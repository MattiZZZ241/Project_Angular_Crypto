import { Component, OnInit } from '@angular/core';
import { SingleCryptoInfoService } from '../single-crypto-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coinsinfo',
  templateUrl: './coinsinfo.component.html',
  styleUrls: ['./coinsinfo.component.css']
})
export class CoinsinfoComponent implements OnInit {
  id: string
  sub: any
  crypto : any

  constructor(private SingleCryptoInfoService: SingleCryptoInfoService,private route: ActivatedRoute) {
    this.id = "none"
   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
   });

    this.SingleCryptoInfoService.getSearchSingleCrypto(this.id).subscribe(
      (data) => {
        console.log(data)
        this.crypto = data
      }
    )
  }
}
