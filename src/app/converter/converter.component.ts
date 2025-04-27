import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule], //Importerar FormsModule för formulär
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  //Egenskaper
  celsiusValue: number = 0;
  fahrenheitValue: number = 0;
  resultTemp: number = 0;
  resultTempText: string = '';
  meterValue: number = 0;
  feetValue: number = 0;
  resultLength: number = 0;
  resultLengthText: string = '';

  //Metoder
  convertToFahrenheit(): void {
    this.resultTemp = (this.celsiusValue * 9 / 5) + 32;
    //Skriver ut resultatet och avrundar till två decimaler.
    this.resultTempText = `${this.celsiusValue} grader celsius är ${this.resultTemp.toFixed(2)} grader fahrenheit`;
  }

  convertToCelsius(): void {
    this.resultTemp = (this.fahrenheitValue - 32) * 5 / 9;
    this.resultTempText = `${this.fahrenheitValue} grader fahrenheit är ${this.resultTemp.toFixed(2)} grader celsius`;
  }

  convertToFeet(): void {
    this.resultLength = this.meterValue * 3.28084;
    this.resultLengthText = `${this.meterValue} meter är ${this.resultLength.toFixed(2)} fot`;
  }

  convertToMeter(): void {
    this.resultLength = this.feetValue / 3.28084;
    this.resultLengthText = `${this.feetValue} fot är ${this.resultLength.toFixed(2)} meter`;
  }
}
