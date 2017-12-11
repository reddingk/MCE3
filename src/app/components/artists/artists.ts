import { Component, OnInit} from '@angular/core';

/* Data Models */
import { ArtistItem } from '../../datamodels/artistItem';
import { SocialItem } from '../../datamodels/socialItem';
/* Service */
import { MCEService } from '../../services/mceService';

@Component({
    templateUrl: './artists.html',
    styleUrls: ['./artists.less']
  })
  export class ArtistsComponent implements OnInit {
    public backimg: String = "assets/images/site/empire.jpg";    

    ngOnInit() :void{ }

  }