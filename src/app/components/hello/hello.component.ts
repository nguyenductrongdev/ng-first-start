import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoneyServiceService } from '../../services/money-service.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  protected name = "ndtrong";
  protected textStatus = false;
  @Input() count = 0;
  @Output() countChanged = new EventEmitter<number>();

  constructor(private _moneyService: MoneyServiceService) {}

  onMouseEnter(): void {
    console.log("mouse enter");
    this.textStatus = true;
  }

  onMouseLeave(): void {
    console.log("mouse leave");
    this.textStatus = false;
  }

  increaseCount(): void {
    this.count++;
    this.countChanged.emit(this.count);
    this._moneyService.setMoney(this.count);
  }

  decreaseCount(): void {
    if(this.count > 0) this.count--;
    this.countChanged.emit(this.count);
    this._moneyService.setMoney(this.count);
  }
}