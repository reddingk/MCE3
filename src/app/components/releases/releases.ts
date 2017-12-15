import { Component, OnInit} from '@angular/core';

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
    public backimg: String = "assets/images/site/empire.jpg"; 
    public allArtists: ArtistItem[] = [];
    public music: ReleaseItem[] = [];
    public mixtapes: ReleaseItem[] =[];
    public videos: VideoReleaseItem[] =[];
    
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
        // Videos
        this.music = this.music.concat(tmpMusic);
        // Videos
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

    ngOnInit() :void{
        this.getArtists();
    }
  }