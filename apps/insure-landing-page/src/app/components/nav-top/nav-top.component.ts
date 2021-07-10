import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'frontend-mentor-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('showHide', [
      state('show', style({
        display: 'block'
      })),
      state('hide', style({
        display: 'none'
      })),
      transition('show <=> hide', [animate('0.4s ease-in')])
    ])
  ]
})
export class NavTopComponent implements OnInit {
  showHide = 'hide';
  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    console.log("Clicked!!!");
    this.showHide = this.showHide === 'hide' ? 'show' : 'hide';
  }

}
