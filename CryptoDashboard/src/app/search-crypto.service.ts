import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchCryptoService {
  subscription: Subscription;

  constructor(private httpClient: HttpClient) {
    this.subscription = Subscription.EMPTY;

   }
   // function to get the crypto search data from the API and return an observable
   getSearchCrypto(search: string|null): Observable<any> {
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
}

