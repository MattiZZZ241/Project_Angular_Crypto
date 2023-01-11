import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingleCryptoGraphService {
  subscription: Subscription;

  doubletab: any = {
    date : Array<string>(),
    price: Array<number>(),
  };

  constructor(private httpClient: HttpClient) {
    this.subscription = Subscription.EMPTY;

  }
// function to get the crypto historical data from the API and return an observable
HistoricalChart(id: string, currency: string, days: number): Observable<any> {

    return this.httpClient
      .get<any[]>(
        'https://api.coingecko.com/api/v3/coins/'+id+'/market_chart?vs_currency='+currency+'&days='+days+'&interval=daily').pipe(
              map( (obj: any) => obj['prices']),
              map((tab: any[]) => {
                for (let i = 0; i < tab.length; i++) {
                  this.doubletab.date.push(this.getDate(tab[i][0]));
                  this.doubletab.price.push(this.convertToNumber(tab[i][1]));
                }
                return this.doubletab;
              }
            )
          );
  }
// function to get the date from the timestamp and return a string with the date in the format day/month/year
  getDate = (date: number) : string => {
    let d = new Date(date)
    let day = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    return day + "/" + month + "/" + year
  }

  convertToNumber = (str: string) : number => {
    return Number(str)
  }
}
