import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class SingleCryptoInfoService {
  subscription: Subscription;

  constructor(private httpClient: HttpClient) {
    this.subscription = Subscription.EMPTY;
  }
  // function to get only one crypto information data from the API and return an observable
  getSearchSingleCrypto(cryptoID: string | null): Observable<any> {
    return this.httpClient
    .get<any[]>(
      'https://api.coingecko.com/api/v3/coins/'+cryptoID
    )
  }
}

