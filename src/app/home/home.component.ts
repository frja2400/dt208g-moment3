import { Component } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';

@Component({
  selector: 'app-home',
  imports: [PictureComponent],  //Importerar min bildkomponent.
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
