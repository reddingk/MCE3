import { Component, OnInit} from '@angular/core';

/* Data Models */
import { ArtistItem } from '../../datamodels/artistItem';
import { ResponseItem } from '../../datamodels/responseItem';

/* Service */
import { MCEService } from '../../services/mceService';

@Component({
    templateUrl: './artists.html',
    styleUrls: ['./artists.less']
  })
  export class ArtistsComponent implements OnInit {
    public backimg: String = "assets/images/site/people.jpg";    
    public allArtists: ArtistItem[] = [];

    constructor(private mceService: MCEService){ }

    getArtists(): void {
      this.mceService.getAllArtists().subscribe(res => {
        if(res.error == null){
          this.allArtists = res.response.artists;
        }
        else {
          console.log(res.error);
        }
      });
    }

    returnArtistUrl(name) {
      return this.mceService.artistUrl(name);
    }
    
    ngOnInit() :void{ 
      this.getArtists();
    }
  }