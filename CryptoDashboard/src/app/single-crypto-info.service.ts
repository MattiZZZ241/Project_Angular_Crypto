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

  getSearchSingleCrypto(cryptoID: string | null): Observable<any> {
    return this.httpClient
    .get<any[]>(
      'https://api.coingecko.com/api/v3/coins/'+cryptoID
    )
  }
}

