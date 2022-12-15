import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { interval, map, Observable, Subscription, take } from 'rxjs';
import { TmplAstBoundAttribute } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  cocktails: Array<any> = new Array<any>()
  subsciption : Subscription
  constructor(private httpClient: HttpClient) {

  this.subsciption =  Subscription.EMPTY
}

getCryptos(): Observable<any> {

    return this.httpClient.get<any[]>('https://api.coingecko.com/api/v3/coins/list?include_platform=false').pipe(
        map( (tab: any[]) => {
          const res = []
          for(let i=0; i<tab.length; i++) {
            const newElement: any = {}
            newElement['id'] = tab[i].id
            newElement['name'] = tab[i].name
            newElement['symbol'] = tab[i].symbol
            res.push(newElement)
          }
          return res;
        }
      )
    )
  }
}
