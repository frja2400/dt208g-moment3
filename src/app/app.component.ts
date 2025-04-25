import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; //Importerar min headerkomponent

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent], //Importerar min headerkomponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dt208g-moment3';
}
