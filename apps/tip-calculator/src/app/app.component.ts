import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'frontend-mentor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly billPlaceholder = 0;
  public readonly tipAmounts = [5, 10, 15, 25, 50];
  public selectedTipPercentage = 0;
  private billAmount = 0;
  public numberOfPeople = 5;

  public get tipAmountPerPerson(): number {
    const tip = this.billAmount * (this.selectedTipPercentage / 100);
    return tip / this.numberOfPeople;
  }

  public get totalPerPerson(): number {
    const tip = this.billAmount * (this.selectedTipPercentage / 100);
    const totalWithTip = this.billAmount + tip;
    return totalWithTip / this.numberOfPeople;
  }

  public onBillAmountChange(bill: number): void {
    this.billAmount = bill;
  }

  public onTipSelected(amount: number): void {
    this.selectedTipPercentage = amount;
  }

  public onNumOfPeopleEntered(people: number): void {
    this.numberOfPeople = people;
  }
}
