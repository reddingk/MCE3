import { NgModule } from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent }  from './components/_app/app';
import { HomeComponent } from './components/home/home';
import { HeaderComponent } from './components/_templates/header';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }    
];

@NgModule({
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes,{ enableTracing: true } )
    ],
    declarations: [        
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    bootstrap: [ AppComponent ]
  })

  export class AppModule { }