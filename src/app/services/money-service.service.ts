import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyServiceService {
  private _moneySubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  _money$: Observable<number> = this._moneySubject.asObservable();

  setMoney(money: number) {
    this._moneySubject.next(money);
  }
}
