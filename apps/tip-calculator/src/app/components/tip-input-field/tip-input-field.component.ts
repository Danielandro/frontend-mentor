import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tip-input-field',
  templateUrl: './tip-input-field.component.html',
  styleUrls: ['./tip-input-field.component.scss']
})
export class CalculatorInputComponent {
  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() placeholder: number | undefined;

  @Output() valueChangeEmt = new EventEmitter<number>();

  public formValue = '';

  public onValueChange(value: string): void {
    if (value === null) {
      this.valueChangeEmt.emit(0);
    } else {
      this.valueChangeEmt.emit(Number(value));
    }
  }

}
