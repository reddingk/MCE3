import { Component } from '@angular/core';
import { HeaderComponent } from '../_templates/header';
import { FooterComponent } from '../_templates/footer';
import { NavItem } from '../../datamodels/navitem';


@Component({  
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: []
})
export class AppComponent {
  
  navitems: NavItem[] = [
    new NavItem('Artists', '/artists'),
    new NavItem('The Empire', '/theempire'),
    new NavItem('Events', '/events'),
    new NavItem('News', '/news'),
    new NavItem('Releases', '/releases'),
    new NavItem('Contact Us', '/contactus')];
}
