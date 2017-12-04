import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxCarousel } from 'ngx-carousel';
import * as $ from 'jquery';

/* Components */
import { GravityComponent } from '../_templates/gravity';

/* Data Models */
import { HighlightItem } from '../../datamodels/highlightItem';
import { MediaItem } from '../../datamodels/mediaItem';
import { NewsItem } from '../../datamodels/newsItem';
import { ArtistItem } from '../../datamodels/artistItem';

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
  

  carouselItems: HighlightItem[] = [
    new HighlightItem("Future Release: 'CMOG'",'CMOG, the album will be released on 11/28 via all platforms','assets/images/demo/CMOG.jpeg'),
    new HighlightItem("Basement Tuesdays Performance","Gandhi Ali will be performing this tuesday at Pure Lounge's 'Basement Tuesdays'",'assets/images/demo/IMG2.jpg'),
    new HighlightItem("Panda's Play House II: A Trippy Affair",'Come checkout Gandhi Ali at MilkBoy Arthouse out in College Park, MD. 12/1','assets/images/demo/panda1.jpeg')];

  spotlightItems: MediaItem[] = [
    new MediaItem('Chocolate City (Teaser)', 'Gandhi Ali', 'LUHaEGtSHmc'),
    new MediaItem('Freestyle', 'Gandhi Ali', 'BlCM6L4Gbss'),
    new MediaItem('Lucky', 'Gandhi Ali', 'DJGjXKln8L8'),
    new MediaItem('Chocolate City (Teaser)', 'Gandhi Ali', 'LUHaEGtSHmc'),
    new MediaItem('Chocolate City (Teaser)', 'Test Artist', 'LUHaEGtSHmc')
  ];

  newsItems: NewsItem[] = [
    new NewsItem('CMOG Releasing Soon!', 'assets/images/demo/CMOG.jpeg', ''),
    new NewsItem('Tackover Tuesday Performance: Gandhi Ali', 'assets/images/demo/IMG2.jpg', ''),
    new NewsItem('Gandhi Ali Performing at Panda Play', 'assets/images/demo/panda1.jpeg', ''),
    new NewsItem('CMOG Releasing Soon!', 'assets/images/demo/CMOG.jpeg', ''),
    new NewsItem('Tackover Tuesday Performance: Gandhi Ali', 'assets/images/demo/IMG2.jpg', ''),
    new NewsItem('Gandhi Ali Performing at Panda Play', 'assets/images/demo/panda1.jpeg', '')
  ];

  featuredArtist: ArtistItem = new ArtistItem("Gandhi Ali", "As Mind Control's first solo artist we have grown around him as an artist.  Get to know Gandhi and see where you can check him out next.", "assets/images/demo/GandhiAli-banner.jpg");

    ngOnInit() {
      this.carouselOne = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 1,
        speed: 400,
        interval: 5000,
        point: {
          visible: true
        },
        load: 2,
        touch: true,
        loop: true,
        custom: 'banner'
      }

      this.carouselTwo = {
        grid: {xs: 1, sm: 3, md: 3, lg: 3, all: 0},
        slide: 1,
        speed: 400,
        interval: 10000,
        point: {
          visible: true
        },
        load: 2,
        touch: true,
        loop: false,
        easing: 'ease'
      }
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
