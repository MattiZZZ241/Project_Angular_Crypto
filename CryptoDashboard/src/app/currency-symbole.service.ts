import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencySymboleService {

  constructor() { }

  // tableau avec toutes les curenncies et leurs symboles
  currencySymbole = [

    { currency: 'usd', symbole: '$' },
    { currency: 'eur', symbole: '€' },
    { currency: 'gbp', symbole: '£' },
    { currency: 'aud', symbole: '$' },
    { currency: 'cad', symbole: '$' },
    { currency: 'chf', symbole: 'CHF' },
    { currency: 'clp', symbole: '$' },
    { currency: 'cny', symbole: '¥' },
    { currency: 'czk', symbole: 'Kč' },
    { currency: 'dkk', symbole: 'kr' },
    { currency: 'hkd', symbole: '$' },
    { currency: 'huf', symbole: 'Ft' },
    { currency: 'idr', symbole: 'Rp' },
    { currency: 'ils', symbole: '₪' },
    { currency: 'inr', symbole: '₹' },
    { currency: 'jpy', symbole: '¥' },
    { currency: 'krw', symbole: '₩' },
    { currency: 'mxn', symbole: '$' },
    { currency: 'myr', symbole: 'RM' },
    { currency: 'nok', symbole: 'kr' },
    { currency: 'nzd', symbole: '$' },
    { currency: 'php', symbole: '₱' },
    { currency: 'pkr', symbole: '₨' },
    { currency: 'pln', symbole: 'zł' },
    { currency: 'rub', symbole: '₽' },
    { currency: 'sek', symbole: 'kr' },
    { currency: 'sgd', symbole: '$' },
    { currency: 'thb', symbole: '฿' },
    { currency: 'try', symbole: '₺' },
    { currency: 'twd', symbole: '$' },
    { currency: 'zar', symbole: 'R' },
    { currency: 'btc', symbole: '฿' },
    { currency: 'eth', symbole: 'Ξ' },

  ]

  getCurrency(): string[] {

    let currency:any = []

    this.currencySymbole.forEach((element) => {

      currency.push(element.currency)

    })

    return currency

  }

  // fonction qui retourne le symbole de la currency
  getCurrencySymbole(currency: string): string {

      let symbole = ''

      this.currencySymbole.forEach((element) => {

        if (element.currency.toLocaleLowerCase() == currency) {

          symbole = element.symbole

        }

      })

      return symbole

    }


}
