import { NgModule } from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AGMaterialModule } from './components/_app/material';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent }  from './components/_app/app';
import { HomeComponent, SafePipe } from './components/home/home';
import { HeaderComponent } from './components/_templates/header';
import { FooterComponent } from './components/_templates/footer';
import { GravityComponent } from './components/_templates/gravity';


const appRoutes: Routes = [
    { path: '', component: HomeComponent }    
];

@NgModule({
    imports: [
      BrowserModule,      
      HttpModule,
      NoopAnimationsModule,
      AGMaterialModule,  
      Angular2FontawesomeModule,
      NgxCarouselModule,
      NgbModule.forRoot(),
      RouterModule.forRoot(appRoutes,{ enableTracing: true } )
    ],
    declarations: [        
        AppComponent,
        HeaderComponent,
        FooterComponent,
        GravityComponent,
        SafePipe,
        HomeComponent
    ],
    bootstrap: [ AppComponent ]
  })

  export class AppModule { }