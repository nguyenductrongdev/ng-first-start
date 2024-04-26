import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() isVisible = true;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor(private _moneyService: MoneyServiceService) {}

  ngOnInit() {
    this._moneyService._money$.subscribe(money => this._money = money);
  }

  toggleVisible(): void {
    console.log("clicked");
    this.isVisible = !this.isVisible;
    this.isVisibleChange.emit(this.isVisible);
  }
}
