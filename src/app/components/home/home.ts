import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

/* Components */
import { GravityComponent } from '../_templates/gravity';

/* Data Models */
import { HighlightItem } from '../../datamodels/highlightItem';
import { MediaItem } from '../../datamodels/mediaItem';
import { NewsItem } from '../../datamodels/newsItem';
import { ArtistItem } from '../../datamodels/artistItem';


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
    
    public youtubeURL(urlcode, type){
      return (type == "video"? "https://www.youtube.com/embed/"+urlcode : "http://img.youtube.com/vi/"+urlcode+"/default.jpg");
    }

}
