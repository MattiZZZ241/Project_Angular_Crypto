import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  subscription: Subscription;

  constructor(private httpClient: HttpClient) {
    this.subscription = Subscription.EMPTY;
  }

  postSearchCrypto(search: string|null): Observable<any> {
    return this.httpClient
      .get<any[]>(
        'https://api.coingecko.com/api/v3/search?query='+search
      )
      .pipe(
        map( (obj: any) => obj['coins']),
        map((tab: any[]) => {
          const res = [];
          for (let i = 0; i < tab.length; i++) {
            const newElement: any = {};
            newElement['id'] = tab[i].id;
            newElement['name'] = tab[i].name;
            newElement['api_symbol'] = tab[i].api_symbol;
            newElement['symbol'] = tab[i].symbol;
            newElement['thumb'] = tab[i].thumb;
            newElement['large'] = tab[i].large;
            res.push(newElement);
          }
          return res;
        })
      );
  }

  getCryptosPerPage(currency :string, order:string,nb_per_page:string,page:string): Observable<any> {
    return this.httpClient
      .get<any[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency='+currency+'&order='+order+'&per_page='+nb_per_page+'&page='+page
        )
      .pipe(
        map((tab: any[]) => {
          const res = [];
          for (let i = 0; i < tab.length; i++) {
            const newElement: any = {};
            newElement['id'] = tab[i].id;
            newElement['symbol'] = tab[i].symbol;
            newElement['name'] = tab[i].name;
            newElement['image'] = tab[i].image;
            newElement['current_price'] = tab[i].current_price;
            newElement['market_cap'] = tab[i].market_cap;
            newElement['market_cap_rank'] = tab[i].market_cap_rank;
            newElement['total_volume'] = tab[i].total_volume;
            newElement['high_24h'] = tab[i].high_24h;
            newElement['low_24h'] = tab[i].low_24h;
            newElement['price_change_24h'] = tab[i].price_change_24h;
            newElement['price_change_percentage_24h'] = tab[i].price_change_percentage_24h;
            newElement['market_cap_change_24h'] = tab[i].market_cap_change_24h;
            newElement['market_cap_change_percentage_24h'] = tab[i].market_cap_change_percentage_24h;
            newElement['circulating_supply'] = tab[i].circulating_supply;
            newElement['total_supply'] = tab[i].total_supply;
            newElement['ath'] = tab[i].ath;
            newElement['ath_change_percentage'] = tab[i].ath_change_percentage;
            newElement['ath_date'] = tab[i].ath_date;
            newElement['atl'] = tab[i].atl;
            newElement['atl_change_percentage'] = tab[i].atl_change_percentage;
            newElement['atl_date'] = tab[i].atl_date;
            newElement['roi'] = tab[i].roi;
            newElement['last_updated'] = tab[i].last_updated;

            res.push(newElement);
          }
          return res;
        })
      );
  }
}
