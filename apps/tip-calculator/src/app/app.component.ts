import { Component } from '@angular/core';

@Component({
  selector: 'frontend-mentor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tip-calculator';
  public readonly tipAmounts = [5, 10, 15, 25, 50];
}
