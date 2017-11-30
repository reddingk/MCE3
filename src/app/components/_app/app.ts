import { Component } from '@angular/core';
import { HeaderComponent } from '../_templates/header';
import { NavItem } from '../../datamodels/navitem';


@Component({  
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: []
})
export class AppComponent {
  footerTitle = 'This is the Footer ';

  navitems: NavItem[] = [
    new NavItem('Artists', ''),
    new NavItem('The Empire', ''),
    new NavItem('Events', ''),
    new NavItem('Media', ''),
    new NavItem('News', ''),
    new NavItem('Releases', ''),
    new NavItem('Contact Us', '')];
}
