import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

/* Data Models */
import { ArtistItem } from '../datamodels/artistItem';
import { ResponseItem } from '../datamodels/responseItem';
import { NewsItem } from '../datamodels/newsItem';
import { ReleaseItem } from '../datamodels/releaseItem';
import { VideoReleaseItem } from '../datamodels/videoReleaseItem';
import { EventItem } from '../datamodels/eventItem';

@Injectable()
export class MCEService {
    constructor(private http: HttpClient) { }
    urlBase: string = 'http://localhost:1738';

    checkLocalImg(img) {
        if(img == undefined || img == null){
            return 'assets/images/logos/logoR_text.png';
        }        
        return img;
    }

    returnTypeUrl(type, urlcode){
        let retUrl: string = (type == "video"? "https://www.youtube.com/embed/"+ urlcode : "http://img.youtube.com/vi/"+ urlcode+"/default.jpg");
        return retUrl;
    }

    socialLink(type, id){
        var retUrl: string = null;

        switch(type){
            case "twitter":
                retUrl = "https://twitter.com/" + id;
                break;
            case "instagram":
                retUrl = "https://www.instagram.com/" + id;
                break;
            case "facebook":                
                break;
            case "snapchat":
                break;
            case "soundcloud":
                retUrl = "https://soundcloud.com/" + id;
                break;
            case "spotify":
                retUrl = "https://open.spotify.com/artist/" + id;
                break;            
            default:
                retUrl = null;
        }

        return retUrl;
    }

    getSpotlightContent(){        
        return this.http.get<ResponseItem>(this.urlBase+'/api/spotlight');         
    }
    
    getNews(total: number, page: number){
        return null; 
    }

    getArtist(name: string){
        return this.http.post<ResponseItem>(this.urlBase+'/api/artist', {artistname: name });         
    }
    
    /* Private Methods */    
}
