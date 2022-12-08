import { Component } from '@angular/core';
import arabicStrings from 'src/constants/strings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  whatDoYouSearchFor = arabicStrings.whatDoYouSearchFor;

}
