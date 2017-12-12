import { Component, OnInit} from '@angular/core';

/* Data Models */
import { ArtistItem } from '../../datamodels/artistItem';
import { ResponseItem } from '../../datamodels/responseItem';

/* Service */
import { MCEService } from '../../services/mceService';

@Component({
    templateUrl: './artistDetails.html',
    styleUrls: ['./artists.less']
  })
  export class ArtistDetailsComponent implements OnInit {
    public backimg: String = "assets/images/site/empire.jpg";    
    public artist: ArtistItem[] = [];

    constructor(private mceService: MCEService){ }

    getArtist(): void {
      this.mceService.getAllArtists().subscribe(res => {
        if(res.error == null){
          //this.artist = res.response.artist;
        }
        else {
          console.log(res.error);
        }
      });
    }

    ngOnInit() :void{ 
      this.getArtist();
    }
  }