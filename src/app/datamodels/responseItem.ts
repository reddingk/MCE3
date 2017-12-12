import { NewsItem } from './newsItem';
import { VideoReleaseItem } from './videoReleaseItem';
import { ArtistItem } from './artistItem';
import { EventItem } from './eventItem';

export class ResponseItem {   
    public error: string;
    public response: {
        artist: ArtistItem,
        news:NewsItem[], 
        videos:VideoReleaseItem[], 
        recentNews:NewsItem[],
        artists: ArtistItem[],
        events: EventItem[]
    };    

    constructor(){}    
}