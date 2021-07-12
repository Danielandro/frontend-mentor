import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tip-selector',
  templateUrl: './tip-selector.component.html',
  styleUrls: ['./tip-selector.component.scss']
})
export class TipSelectorComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() amounts: number[] | undefined;

  @Output() buttonSelectedEmt = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
  }

}
