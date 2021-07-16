import { Component } from '@angular/core';

@Component({
  selector: 'frontend-mentor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly billPlaceholder = 0;
  private _billAmount = 0;
  public readonly tipAmounts = [5, 10, 15, 25, 50];

  public onBillAmountChange(bill: number): void {
    this._billAmount = bill;
  }
}
