import { Component } from '@angular/core';
import { NavItem } from '../../datamodels/navitem';

@Component({
  selector:'my-app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.less']
})
export class HeaderComponent {
    title = 'This is the Header Template';
    navitems: NavItem[] = [
      new NavItem('Artists', ''),
      new NavItem('The Empire', ''),
      new NavItem('Events', ''),
      new NavItem('Media', ''),
      new NavItem('News', ''),
      new NavItem('Releases', ''),
      new NavItem('Contact Us', '')];
      
    
}
