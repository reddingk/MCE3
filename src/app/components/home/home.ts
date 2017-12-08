import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxCarousel } from 'ngx-carousel';
import * as $ from 'jquery';

/* Components */
import { GravityComponent } from '../_templates/gravity';

/* Data Models */
import { ArtistItem } from '../../datamodels/artistItem';
import { NewsItem } from '../../datamodels/newsItem';
import { VideoReleaseItem } from '../../datamodels/videoReleaseItem';
import { EventItem } from '../../datamodels/eventItem';
import { SocialItem } from '../../datamodels/socialItem';

/* Service */
import { MCEService } from '../../services/mceService';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.less']
})
export class HomeComponent implements OnInit { 
  public carouselOne: NgxCarousel;
  public carouselTwo: NgxCarousel;
  public intervalId = null;
  public mobileCheck = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|'  + 'Opera Mini|IEMobile|Mobile' , 'i');
  
  constructor(private mceService: MCEService){ }

  carouselItems: NewsItem[] = [];
  spotlightItems: NewsItem[] = [];
  newsItems: NewsItem[] = [];
  featuredArtist: ArtistItem = null;
  error: any;

  

  getSpotlightItems(): void {
    var allSpotlights = null;
    this.mceService.getSpotlightContent()
    .subscribe(res => {
      if(res["error"] == null){
        this.carouselItems = res["response"]["news"];
        this.spotlightItems = res["response"]["videos"];
      }
      else {
        console.log(res["error"]);
      }
    }, error => { 
      console.log("Error retrieving spotlight data: %s", error.message);
    });
  }

  ngOnInit() :void{
      this.carouselOne = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 1, speed: 400, interval: 5000,
        point: { visible: true },
        load: 2, touch: true, loop: true, custom: 'banner'
      }

      this.carouselTwo = {
        grid: {xs: 1, sm: 3, md: 3, lg: 3, all: 0},
        slide: 1, speed: 400, interval: 10000,
        point: { visible: true },
        load: 2, touch: true, loop: false, easing: 'ease'
      }
      this.getSpotlightItems();
    }  
       

    public loadCarousel(loadType:string, event: Event) { }
    
    public horizontalScroll(direction:number , container: string){      
      var containerObj = $("#"+container);
      let scrollSpace: number = 350;

      if(containerObj != null){
        if(containerObj[0].scrollLeft < 350 && direction > 0){
          scrollSpace -= containerObj[0].scrollLeft;
        }
        let scrollLoc: number = containerObj[0].scrollLeft + (scrollSpace * direction);
        containerObj.animate({ scrollLeft: scrollLoc}, "slow");
      }
    }

    public scrollActivate(direction:number , container: string){
      var containerObj = document.getElementById(container);
      let scrollSpace: number = 15;

      if(containerObj != null && !this.mobileCheck.test(navigator.userAgent)){
        clearInterval(this.intervalId);

        this.intervalId = setInterval(function() {
          let scrollLoc: number = containerObj.scrollLeft + (scrollSpace * direction);
          containerObj.scrollLeft = scrollLoc;
        }, 25);
      }
    }

    public scrollDeactivate(){
      clearInterval(this.intervalId);
    }
}
