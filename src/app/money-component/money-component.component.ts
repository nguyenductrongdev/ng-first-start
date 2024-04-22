import { Component } from '@angular/core';
import { MoneyServiceService } from '../services/money-service.service';

@Component({
  selector: 'app-money-component',
  standalone: true,
  imports: [],
  templateUrl: './money-component.component.html',
  styleUrl: './money-component.component.css'
})
export class MoneyComponentComponent {
  _money: number = 0

  constructor(private _moneyService: MoneyServiceService) {}

  ngOnInit() {
    this._moneyService._money$.subscribe(money => this._money = money);
  }
}
