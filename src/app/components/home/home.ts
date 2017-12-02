import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

/* Components */
import { GravityComponent } from '../_templates/gravity';

/* Data Models */
import { HighlightItem } from '../../datamodels/highlightItem';
import { MediaItem } from '../../datamodels/mediaItem';


@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.less']
})
export class HomeComponent implements OnInit {
  public carouselOne: NgxCarousel;
  public carouselTwo: NgxCarousel;

  carouselItems: HighlightItem[] = [
    new HighlightItem('Test','This is a test item','assets/images/demo/CMOG.jpeg'),
    new HighlightItem('Test2','This is a test item','assets/images/demo/IMG2.jpg'),
    new HighlightItem('Test3','This is a test item','assets/images/demo/panda1.jpeg')];

  spotlightItems: MediaItem[] = [
    new MediaItem('Test Video 1', 'Test Artist', 'LUHaEGtSHmc'),
    new MediaItem('Test Video 2', 'Test Artist', 'LUHaEGtSHmc'),
    new MediaItem('Test Video 3', 'Test Artist', 'LUHaEGtSHmc'),
    new MediaItem('Test Video 4', 'Test Artist', 'LUHaEGtSHmc'),
    new MediaItem('Test Video 5', 'Test Artist', 'LUHaEGtSHmc')
  ]

    ngOnInit() {
      this.carouselOne = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 1,
        speed: 400,
        interval: 7000,
        point: {
          visible: true
        },
        load: 2,
        touch: true,
        loop: true,
        custom: 'banner'
      }

      this.carouselTwo = {
        grid: {xs: 2, sm: 3, md: 3, lg: 3, all: 0},
        slide: 1,
        speed: 400,
        interval: 7000,
        point: {
          visible: true
        },
        load: 2,
        touch: true,
        loop: true,
        easing: 'ease'
      }
    }

    public loadCarousel(loadType:string, event: Event) { }
    
    public youtubeURL(urlcode, type){
      return (type == "video"? "https://www.youtube.com/embed/"+urlcode : "http://img.youtube.com/vi/"+urlcode+"/default.jpg");
    }

}
