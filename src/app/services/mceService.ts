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
    urlBase: string = '';

    checkLocalImg(img) {
        if(img == undefined || img == null){
            return 'assets/images/logos/logoR_text.png';
        }        
        return img;
    }

    returnTypeUrl(type, urlcode){
        let retUrl: string = null;
        switch(type){
            case "video":
                retUrl = "https://www.youtube.com/embed/"+urlcode;
                break;
            case "watch":
                retUrl = "https://www.youtube.com/watch?v="+urlcode;
                break;
            default:    
                retUrl = "http://img.youtube.com/vi/"+ urlcode+"/hqdefault.jpg";
                //retUrl = "https://i.ytimg.com/vi_webp/" + urlcode+"/sddefault.webp";
                break;
        }
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

    artistUrl(name) {
        var cleanName = name.split(' ').join("%20");
        return "/artists/"+cleanName;
    }
    newsUrl(name) {
        var cleanName = name.split(' ').join("%20");
        return "/news/"+cleanName;
    }     

    getMusicIcon(type){
        if(type.includes("itunes")){
            return "apple";
        }
        else if(type.includes("soundcloud")){
            return "soundcloud";
        }
        return "music";        
    }
    /* Compare Dates */
    newYear(prev, cur){
        var pDate = prev.split(/\D/g);
        var cDate = cur.split(/\D/g);

        return pDate[0] > cDate[0];
    }

    hasExpired(cDate){
        const iDate = new Date(Date.now());
        var resList = cDate.split(/\D/g);

        var yrCmp = iDate.getFullYear() - resList[0];
        var mhCmp = (iDate.getMonth()+1) - resList[1];
        var dyCmp = iDate.getDay() - resList[2];
        var hrCmp = iDate.getHours() - resList[3];
        var mnCmp = iDate.getMinutes() - resList[4];
        var scCmp = iDate.getSeconds() - resList[5];
        
        if(yrCmp < 0){ return false;}
        if(yrCmp == 0 && mhCmp < 0){ return false;}
        if(yrCmp == 0 && mhCmp == 0 && dyCmp < 0){ return false;}
        if(yrCmp == 0 && mhCmp == 0 && dyCmp == 0 && hrCmp < 0){ return false;}
        if(yrCmp == 0 && mhCmp == 0 && dyCmp == 0 && hrCmp == 0 && mnCmp < 0){ return false;}
        if(yrCmp == 0 && mhCmp == 0 && dyCmp == 0 && hrCmp == 0 && mnCmp == 0 && scCmp < 0){ return false;}

        return true;
    }
    /* Clean Date */
    cleanDate(dateStr, type){
        var ret = "";
        // parse Date
        var resList = dateStr.split(/\D/g);
        var monthList = ["Jan","Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        try {
            switch (type){
                case 'dd':
                    //ret = date.getDate()+"";
                    ret = resList[2];
                    ret = (ret.length < 2 ? "0"+ret : ret);
                    break;
                case 'MMM':
                    //var tmpMonth = date.getMonth();
                    var tmpMonth = resList[1]-1;
                    ret = monthList[tmpMonth];          
                    break;
                case 'h a':
                    //var tmpTime = date.getHours();
                    var tmpTime = resList[3];
                    if(tmpTime > 12){
                        ret = (tmpTime-12) + "PM";
                    }
                    else {
                        ret = tmpTime + "AM";
                    }          
                    break;
                case 'yyyy':
                    //var tmpMonth = date.getFullYear();                    
                    ret = resList[0];          
                    break;
                case 'MMM dd yyyy':
                    var tmpMonth = resList[1]-1;
                    var tmpDay = resList[2];
                    tmpDay = (tmpDay.length < 2 ? "0"+tmpDay : tmpDay);

                    ret = monthList[tmpMonth] +" " + tmpDay + " " + resList[0];
                    break;                
                default:
                    break;
            }
        }
        catch(ex){
            console.log("Error Parsing Date");
        }
        return ret;
    }

    /* API Calls */
    getSpotlightContent(){        
        return this.http.get<ResponseItem>(this.urlBase+'/api/spotlight');         
    }
    
    getNews(ntotal: string){
        return this.http.post<ResponseItem>(this.urlBase+'/api/news', {query: { total: ntotal}});          
    }

    getArtist(name: string){
        return this.http.post<ResponseItem>(this.urlBase+'/api/artist', {artistname: name });         
    }
    
    getAllArtists(){        
        return this.http.get<ResponseItem>(this.urlBase+'/api/allArtists');         
    }  
    
    getEventsByDate(edate: string, aname: string){
        return this.http.post<ResponseItem>(this.urlBase+'/api/events', {query: { date: edate, artistname: aname}});         
    }

    getEventsTotal(etotal: number, aname: string){
        return this.http.post<ResponseItem>(this.urlBase+'/api/events', {query: { total: etotal, artistname: aname}});         
    }

    getAllReleases(){        
        return this.http.get<ResponseItem>(this.urlBase+'/api/allReleases');         
    }  
    /* Private Methods */    
}
