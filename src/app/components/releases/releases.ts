import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { NgxCarousel } from 'ngx-carousel';

/* Data Models */
import { ResponseItem } from '../../datamodels/responseItem';
import { ArtistItem } from '../../datamodels/artistItem';
import { ReleaseItem } from '../../datamodels/releaseItem';
import { VideoReleaseItem } from '../../datamodels/videoReleaseItem';

/* Service */
import { MCEService } from '../../services/mceService';
import { SafePipe } from '../home/home';

@Component({
    templateUrl: './releases.html',
    styleUrls: ['./releases.less']
  })
  export class ReleasesComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;

    public backimg: String = "assets/images/site/album.jpg"; 
    public allArtists: ArtistItem[] = [];
    public music: ReleaseItem[] = [];
    public mixtapes: ReleaseItem[] =[];
    public videos: VideoReleaseItem[] =[];

    public mixtapeCarousel: NgxCarousel;
    public musicDataSource;
    public videoDataSource;

    displayedColumns = ['icon', 'title', 'artist', 'date', 'source'];   

    constructor(private mceService: MCEService){ }

    getReleases(): void {
        
        this.mceService.getAllReleases().subscribe(res => {
            if(res.error == null){                
                this.mixtapes = res.response.mixtapes;

                this.musicDataSource = new MatTableDataSource(res.response.music);
                this.videoDataSource = new MatTableDataSource(res.response.videos);
            }
            else {
                console.log(res.error);
            }
        });
    }

    public getIcon(type){
        return this.mceService.getMusicIcon(type);
    }
  
    public returnTypeUrl(type, urlcode): string {
        return this.mceService.returnTypeUrl(type, urlcode);
    }

    public checkimg(imgUrl){
      return this.mceService.checkLocalImg(imgUrl);
    }
  
    public getTypeString(type){
        var retVal = "";
        if(type != undefined){
          var typeStr = type.split("-");
          retVal = typeStr[0];
        }
        return retVal;
    }    

    ngOnInit() :void{
        this.getReleases();

        this.mixtapeCarousel = {
            grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
            slide: 3, speed: 0, interval: 0,
            point: { visible: true },
            load: 1, touch: true, loop: false, custom: 'banner'
          };
    }
  }