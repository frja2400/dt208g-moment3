import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule], //Importerar FormsModule för formulär
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  //Egenskaper av klassen ConverterComponent
  celsiusValue: number = 0;
  fahrenheitValue: number = 0;
  result: number = 0;

  //Metoder
  convertToFahrenheit(): void {
    this.result = (this.celsiusValue * 9 / 5) + 32;
  }

  convertToCelsius(): void {
    this.result = (this.fahrenheitValue - 32) * 5 / 9;
  }
}
