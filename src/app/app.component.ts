import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { MoneyComponentComponent } from './money-component/money-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, MoneyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wolf moon';
  count = 0;
  showMoneyBoard = false;

  childrenCountChanged($event: number): void {
    console.log("event:" + $event);
    this.count = $event;
  }
}
