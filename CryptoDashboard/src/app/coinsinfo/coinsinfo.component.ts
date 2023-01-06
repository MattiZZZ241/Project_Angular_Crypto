import { Component, OnInit,OnDestroy } from '@angular/core';
import { SingleCryptoInfoService } from '../single-crypto-info.service';
import { SingleCryptoGraphService } from '../single-crypto-graph.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-coinsinfo',
  templateUrl: './coinsinfo.component.html',
  styleUrls: ['./coinsinfo.component.css']
})
export class CoinsinfoComponent implements OnInit, OnDestroy {
  loading$ = this.loader.loading$;
  id: string
  subscription1: Subscription
  subscription2: Subscription

  crypto : any
  chartInfoTabPrices : Array<any> = new Array<any>()

  constructor(private SingleCryptoInfoService: SingleCryptoInfoService,private SingleCryptoGraphService: SingleCryptoGraphService,private route: ActivatedRoute,private router: Router, public loader: LoadingService) {
    this.subscription1 = Subscription.EMPTY;
    this.subscription2 = Subscription.EMPTY;
    this.id = "none"
    this.crypto = {}
   }

  ngOnInit(): void {
    this.subscription1 = this.route.params.subscribe(params => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.id = params['id'];

      this.subscription2.unsubscribe()
   });


   this.subscription2 = this.SingleCryptoInfoService.getSearchSingleCrypto(this.id).subscribe(
      (data) => {

        this.crypto = data
      }
    )
  }

  colorPercentageChange(){
    if(this.crypto.market_data.price_change_percentage_24h > 0){
      return "green"
    }else{
      return "red"
    }
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe()
    this.subscription2.unsubscribe()
  }

  getId(){
    return this.id
  }
}
