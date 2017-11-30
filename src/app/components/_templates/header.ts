import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NavItem } from '../../datamodels/navitem';

@Component({
  selector:'my-app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.less']
})
export class HeaderComponent {
    @Output() toggleEvent = new EventEmitter<string>();
    @Input() navitems: NavItem[];    
    
    toggleSideNav() {
      this.toggleEvent.next();
    }    
}
