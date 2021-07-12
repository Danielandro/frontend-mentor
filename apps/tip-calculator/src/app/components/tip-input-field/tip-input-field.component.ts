import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tip-input-field',
  templateUrl: './tip-input-field.component.html',
  styleUrls: ['./tip-input-field.component.scss']
})
export class CalculatorInputComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() placeholder: number | undefined;

  @Output() valueChangeEmt = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

}
