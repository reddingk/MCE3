import { Component, Output, Input, EventEmitter, HostListener, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavItem } from '../../datamodels/navitem';

@Component({
  selector:'my-app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.less']
})
export class HeaderComponent {
    @Output() toggleEvent = new EventEmitter<string>();
    @Input() navitems: NavItem[];    
    @ViewChild('mceHeader') el:ElementRef;
    constructor(private renderer: Renderer){}

    toggleSideNav() {
      this.toggleEvent.next();
    }    

    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {        
      if(this.el != undefined){
        if(window.pageYOffset > 20){          
          if(!this.el.nativeElement.classList.contains('dark')){
            console.log("add Dark Class");
            this.el.nativeElement.classList.add("dark");
          }                    
        }
        else {
          if(this.el.nativeElement.classList.contains('dark')){
            console.log('remove Dark Class');
            this.el.nativeElement.classList.remove("dark");
          }
        }
      }
    }
}