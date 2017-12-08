import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

/* Data Models */
import { ArtistItem } from '../datamodels/artistItem';
import { NewsItem } from '../datamodels/newsItem';
import { ReleaseItem } from '../datamodels/releaseItem';
import { VideoReleaseItem } from '../datamodels/videoReleaseItem';
import { EventItem } from '../datamodels/eventItem';

@Injectable()
export class MCEService {
    constructor(private http: HttpClient) { }
    urlBase: string = 'http://localhost:1738';

    getSpotlightContent(){        
        return this.http.get(this.urlBase+'/api/spotlight');          
    }
    
    getNews(total: number, page: number){
        return null; 
    }

    getArtist(name: string){
        return null;         
    }
    
    /* Private Methods */    
}
