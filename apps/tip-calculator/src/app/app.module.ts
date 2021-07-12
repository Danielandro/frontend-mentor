import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorInputComponent } from './components/tip-input-field/tip-input-field.component';
import { TipSelectorComponent } from './components/tip-selector/tip-selector.component';
import { TipTotalComponent } from './components/tip-total/tip-total.component';


@NgModule({
  declarations: [AppComponent, CalculatorInputComponent, TipSelectorComponent, TipTotalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
