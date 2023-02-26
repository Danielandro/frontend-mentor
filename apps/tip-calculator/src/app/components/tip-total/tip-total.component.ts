import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tip-total',
  templateUrl: './tip-total.component.html',
  styleUrls: ['./tip-total.component.scss'],
})
export class TipTotalComponent implements OnInit {
  @Input() tipAmountPerPerson: number | undefined;
  @Input() totalPerPerson: number | undefined;

  @Output() resetClickEmt = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
