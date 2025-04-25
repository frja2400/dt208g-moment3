import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; //Importerar länkfunktioner till nav i min headerkomponent

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive], //Importerar länkfunktioner till nav i min headerkomponent
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
