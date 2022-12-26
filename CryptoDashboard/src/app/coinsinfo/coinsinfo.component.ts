import { Component, OnInit } from '@angular/core';
import { SingleCryptoInfoService } from '../single-crypto-info.service';
import { SingleCryptoGraphService } from '../single-crypto-graph.service';
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
  chartInfoTabPrices : Array<any> = new Array<any>()

  constructor(private SingleCryptoInfoService: SingleCryptoInfoService,private SingleCryptoGraphService: SingleCryptoGraphService,private route: ActivatedRoute) {
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

    this.SingleCryptoGraphService.HistoricalChart(this.id,"usd",30).subscribe(
      (data) => {
        console.log(data)
        this.chartInfoTabPrices = data.prices
      }
    );



  }


  // get date from chartInfo and return it in a string format for the chart to display it correctly
  getDate = (date: number) : string => {
    let d = new Date(date)
    let day = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    return day + "/" + month + "/" + year
  }

}
