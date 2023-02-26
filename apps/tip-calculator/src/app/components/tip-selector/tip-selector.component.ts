import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tip-selector',
  templateUrl: './tip-selector.component.html',
  styleUrls: ['./tip-selector.component.scss'],
})
export class TipSelectorComponent {
  @Input() title: string | undefined;
  @Input() amounts: number[] | undefined;
  @Input() selectedAmount: number | null = null;

  @Output() buttonSelectedEmt = new EventEmitter<number>();
  // constructor() {}

  public onAmountSelected(amount: number): void {
    this.buttonSelectedEmt.emit(+amount);
  }
}
