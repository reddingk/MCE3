import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NavItem } from '../../datamodels/navitem';

@Component({
  selector:'my-app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.less']
})
export class FooterComponent {
    @Input() navitems: NavItem[];  
    
    logo: string = "assets/images/logos/logoR.png";
}
