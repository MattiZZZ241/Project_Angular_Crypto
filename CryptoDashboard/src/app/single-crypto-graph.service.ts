import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class SingleCryptoGraphService {
  subscription: Subscription;

  constructor(private httpClient: HttpClient) {
    this.subscription = Subscription.EMPTY;

  }

HistoricalChart(id: string, currency: string, days: number): Observable<any> {

    return this.httpClient
      .get<any[]>(
        'https://api.coingecko.com/api/v3/coins/'+id+'/market_chart?vs_currency='+currency+'&days='+days+'&interval=daily')
  }
}
