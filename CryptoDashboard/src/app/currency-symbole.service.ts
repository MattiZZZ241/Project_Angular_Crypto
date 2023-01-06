import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencySymboleService {

  constructor() { }

  // tableau avec toutes les currencies et leurs symboles
  currencySymbol = [

    { currency: 'usd', symbol: '$' },
    { currency: 'eur', symbol: '€' },
    { currency: 'btc', symbol: '฿' },
    { currency: 'eth', symbol: 'Ξ' },
    { currency: 'gbp', symbol: '£' },
    { currency: 'aud', symbol: '$' },
    { currency: 'cad', symbol: '$' },
    { currency: 'chf', symbol: 'CHF' },
    { currency: 'clp', symbol: '$' },
    { currency: 'cny', symbol: '¥' },
    { currency: 'czk', symbol: 'Kč' },
    { currency: 'dkk', symbol: 'kr' },
    { currency: 'hkd', symbol: '$' },
    { currency: 'huf', symbol: 'Ft' },
    { currency: 'idr', symbol: 'Rp' },
    { currency: 'ils', symbol: '₪' },
    { currency: 'inr', symbol: '₹' },
    { currency: 'jpy', symbol: '¥' },
    { currency: 'krw', symbol: '₩' },
    { currency: 'mxn', symbol: '$' },
    { currency: 'myr', symbol: 'RM' },
    { currency: 'nok', symbol: 'kr' },
    { currency: 'nzd', symbol: '$' },
    { currency: 'php', symbol: '₱' },
    { currency: 'pkr', symbol: '₨' },
    { currency: 'pln', symbol: 'zł' },
    { currency: 'rub', symbol: '₽' },
    { currency: 'sek', symbol: 'kr' },
    { currency: 'sgd', symbol: '$' },
    { currency: 'thb', symbol: '฿' },
    { currency: 'try', symbol: '₺' },
    { currency: 'twd', symbol: '$' },
    { currency: 'zar', symbol: 'R' },


  ]

  getCurrency(): string[] {

    let currency:any = []

    this.currencySymbol.forEach((element) => {

      currency.push(element.currency)

    })

    return currency

  }

  getCurrencySymbole(currency: string): string {
      let symbol = ''

      this.currencySymbol.forEach((element) => {

        if (element.currency.toLocaleLowerCase() == currency) {
          symbol = element.symbol
        }

      })

      return symbol
    }
}
