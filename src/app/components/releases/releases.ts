import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';


/* Data Models */
import { ResponseItem } from '../../datamodels/responseItem';
import { ArtistItem } from '../../datamodels/artistItem';
import { ReleaseItem } from '../../datamodels/releaseItem';
import { VideoReleaseItem } from '../../datamodels/videoReleaseItem';

/* Service */
import { MCEService } from '../../services/mceService';

@Component({
    templateUrl: './releases.html',
    styleUrls: ['./releases.less']
  })
  export class ReleasesComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;

    public backimg: String = "assets/images/site/empire.jpg"; 
    public allArtists: ArtistItem[] = [];
    public music: ReleaseItem[] = [];
    public mixtapes: ReleaseItem[] =[];
    public videos: VideoReleaseItem[] =[];

    displayedColumns = ['icon', 'title', 'artist', 'date', 'source'];
    musicDataSource = new MatTableDataSource(this.music);
    

    constructor(private mceService: MCEService){ }

    retrieveMusic(artist: ArtistItem): void {
        let tmpMusic:ReleaseItem[] = [];
        let tmpMixtapes:ReleaseItem[] = [];
        // Videos
        this.videos = this.videos.concat(artist.videos);
        // Sort Release list
        for(var i =0; i < artist.releases.length; i++){
            let release: ReleaseItem = artist.releases[i];
            release.artist = artist.name;

            if(release.type.includes('mixtape')){
                tmpMixtapes.push(release);
            }
            else {
                tmpMusic.push(release);
            }
        }

        // Set video artist name
        for(var j =0; j < artist.videos.length; j++){
            artist.videos[j].artist = artist.name;
        }

        // Videos
        this.videos = this.videos.concat(artist.videos);
        // Music
        let tmpmusic = this.music.concat(tmpMusic);
        this.musicDataSource = new MatTableDataSource(tmpmusic);
        // Mixtape
        this.mixtapes = this.mixtapes.concat(tmpMixtapes);
    }

    getArtists(): void {
        this.mceService.getAllArtists().subscribe(res => {
            if(res.error == null){
                this.allArtists = res.response.artists;

                for(var i = 0; i < this.allArtists.length; i++){
                    this.retrieveMusic(this.allArtists[i]);
                }
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
  
    public getTypeString(type){
        var retVal = "";
        if(type != undefined){
          var typeStr = type.split("-");
          retVal = typeStr[0];
        }
        return retVal;
    }

    ngOnInit() :void{
        this.getArtists();
    }
  }