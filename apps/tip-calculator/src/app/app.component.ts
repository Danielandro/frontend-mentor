import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'frontend-mentor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly billPlaceholder = 0;
  private billAmount = 0;
  public readonly tipAmounts = [5, 10, 15, 25, 50];
  public selectedTipAmount: number | null = null;

  public onBillAmountChange(bill: number): void {
    this.billAmount = bill;
  }

  public onTipSelected(amount: number): void {
    this.selectedTipAmount = amount;
  }
}
