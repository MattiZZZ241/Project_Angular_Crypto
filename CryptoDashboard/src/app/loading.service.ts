import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor() {}
  // function to show the loading
  show() {
    this._loading.next(true);
  }
  // function to hide the loading
  hide() {
    this._loading.next(false);
  }
}
