import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

/* Data Models */
import { ArtistItem } from '../datamodels/artistItem';
import { NewsItem } from '../datamodels/newsItem';
import { ReleaseItem } from '../datamodels/releaseItem';
import { VideoReleaseItem } from '../datamodels/videoReleaseItem';
import { EventItem } from '../datamodels/eventItem';

@Injectable()
export class MCEService {
    getHomeCarousel(){
        return [
            new NewsItem("Future Release: 'CMOG'",'assets/images/demo/CMOG.jpeg', 'CMOG, the album will be released on 11/28 via all platforms'),
            new NewsItem("Future Release: 'CMOG'",'assets/images/demo/CMOG.jpeg', 'CMOG, the album will be released on 11/28 via all platforms')
        ];        
    }

    getSpotlightVideos(){
        return [
            new NewsItem('Chocolate City (Teaser)', 'Gandhi Ali', 'LUHaEGtSHmc'),
            new NewsItem('Freestyle', 'Gandhi Ali', 'BlCM6L4Gbss'),
            new NewsItem('Lucky', 'Gandhi Ali', 'DJGjXKln8L8'),
            new NewsItem('Chocolate City (Teaser)', 'Gandhi Ali', 'LUHaEGtSHmc'),
            new NewsItem('Chocolate City (Teaser)', 'Test Artist', 'LUHaEGtSHmc')
        ];
    }

    getNews(total: number, page: number){
        return [
            new NewsItem('CMOG Releasing Soon!', 'assets/images/demo/CMOG.jpeg', ''),
            new NewsItem('Tackover Tuesday Performance: Gandhi Ali', 'assets/images/demo/IMG2.jpg', ''),
            new NewsItem('Gandhi Ali Performing at Panda Play', 'assets/images/demo/panda1.jpeg', ''),
            new NewsItem('CMOG Releasing Soon!', 'assets/images/demo/CMOG.jpeg', ''),
            new NewsItem('Tackover Tuesday Performance: Gandhi Ali', 'assets/images/demo/IMG2.jpg', ''),
            new NewsItem('Gandhi Ali Performing at Panda Play', 'assets/images/demo/panda1.jpeg', '')        
        ];
    }

    getArtist(name: string){
        return new ArtistItem("Gandhi Ali", "As Mind Control's first solo artist we have grown around him as an artist.  Get to know Gandhi and see where you can check him out next.", "assets/images/demo/GandhiAli-banner.jpg");        
    }
}