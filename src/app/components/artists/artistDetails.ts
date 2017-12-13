import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';

/* Data Models */
import { ArtistItem } from '../../datamodels/artistItem';
import { ReleaseItem } from '../../datamodels/releaseItem';
import { SocialItem } from '../../datamodels/socialItem';
import { EventItem } from '../../datamodels/eventItem';
import { ResponseItem } from '../../datamodels/responseItem';

/* Service */
import { MCEService } from '../../services/mceService';
import { SafePipe } from '../home/home';

@Component({
    templateUrl: './artistDetails.html',
    styleUrls: ['./artists.less']
  })
  export class ArtistDetailsComponent implements OnInit {
    public backimg: String = "assets/images/site/empire.jpg";    
    public artist: ArtistItem = null;
    public music: ReleaseItem[] = [];
    public mixtapes: ReleaseItem[] =[];    
    public events: EventItem[] = [];

    public intervalId = null;
    private mobileCheck = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|'  + 'Opera Mini|IEMobile|Mobile' , 'i');
    
    public musicCarousel: NgxCarousel;
    public mixtapeCarousel: NgxCarousel;
    public videoCarousel: NgxCarousel;

    constructor(private mceService: MCEService, private route: ActivatedRoute){ }

    /* Get Events Data */
    getEvents(name: string): void {      
      /*const iDate = new Date(Date.now());
      iDate.setDate(iDate.getDate() -30);
      iDate.toString()*/

      this.mceService.getEventsTotal(5, name).subscribe(res => {
        if(res.error == null){
          this.events = res.response.events;          
        }
        else {
          console.log(res.error);
        }
      });
    }    
    /* Check expiration date */
    checkDate(date: string): string {
      let status: string = "";

      const iDate = new Date(Date.now());
      const cDate = new Date(date);

      if( iDate > cDate){
        status = "expired";
      }

      return status;
    }

    /* Get Artist Data */
    getArtist(name: string): void {
      this.mceService.getArtist(name).subscribe(res => {
        if(res.error == null){
          this.artist = res.response.artist;
          // split music types
          for(var i =0; i < this.artist.releases.length; i++){
            let release: ReleaseItem = this.artist.releases[i];

            if(release.type.includes('mixtape')){
              this.mixtapes.push(release);
            }
            else {
              this.music.push(release);
            }
          }

          if(this.artist != null && this.artist.name != null){
            this.getEvents(this.artist.name);
          }
        }
        else {
          console.log(res.error);
        }
      });
    }

    /* Horizontal Scroll Controls */    
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
    
    /* Service Methods  */
    public returnSocialUrl(social:SocialItem){
      return this.mceService.socialLink(social.site, social.handle);
    }

    public checkimg(imgUrl){
      return this.mceService.checkLocalImg(imgUrl);
    }

    public getIcon(type){
      return this.mceService.getMusicIcon(type);
    }

    public returnTypeUrl(type, urlcode): string {
      return this.mceService.returnTypeUrl(type, urlcode);
    }

    public getTypeString(type){
      var retVal = "";
      if(type != undefined){
        var typeStr = type.split("-");
        retVal = typeStr[0];
      }
      return retVal;
    }
    /* On Initialize */
    ngOnInit() :void{
      this.route.params.forEach((params: Params) => {
        if (params['name'] !== undefined) {
          const name = params['name'];
          this.getArtist(name);
        }
        else {
          console.log("Invalid Artist Name");
        }
      });

      this.musicCarousel = {
        grid: {xs: 2, sm: 3, md: 3, lg: 3, all: 0},
        slide: 3, speed: 0, interval: 0,
        point: { visible: true },
        load: 3, touch: true, loop: false, custom: 'banner'
      };

      this.mixtapeCarousel = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 3, speed: 0, interval: 0,
        point: { visible: true },
        load: 1, touch: true, loop: false, custom: 'banner'
      };

      this.videoCarousel = {
        grid: {xs: 1, sm: 2, md: 2, lg: 2, all: 0},
        slide: 3, speed: 0, interval: 0,
        point: { visible: true },
        load: 2, touch: true, loop: false, custom: 'banner'
      };      
    }
  }