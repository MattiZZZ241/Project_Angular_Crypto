import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderfiltreService {

  constructor() { }

  orderFiltre = [
    { order: 'market_cap_desc', name: 'Market Cap' },
    { order: 'gecko_desc', name: 'Gecko' },
    { order: 'market_cap_asc', name: 'Market Cap' },
    { order: 'gecko_asc', name: 'Gecko' },
    { order: 'volume_asc', name: 'Volume' },
    { order: 'volume_desc', name: 'Volume' },
    { order: 'id_asc', name: 'Id' },
    { order: 'id_desc', name: 'Id' },
  ]
  // function to get the order of the filter
  getOrder(): string[] {

      let order:any = []

      this.orderFiltre.forEach((element) => {

        order.push(element.order)

      })

      return order
    }
}
