import { Component, OnInit} from '@angular/core';

/* Data Models */
import { ArtistItem } from '../../datamodels/artistItem';
import { SocialItem } from '../../datamodels/socialItem';
/* Service */
import { MCEService } from '../../services/mceService';

@Component({
    templateUrl: './about.html',
    styleUrls: ['./about.less']
  })
  export class AboutComponent implements OnInit {
    public backimg: String = "assets/images/site/empire.jpg";

    public staff: ArtistItem[] = [
        new ArtistItem('G', 'CEO', 'assets/images/site/empire/GField.jpg', [new SocialItem('twitter','Sir_CEO'), new SocialItem('instagram','CEO_KING_FIELDMOB')]),
        new ArtistItem('Dwayne', 'Videographer & Photographer', 'assets/images/site/empire/Dwayne.jpg', [new SocialItem('twitter','DWJproduction'), new SocialItem('instagram','DWJproduction')]),
        new ArtistItem('Drty Warhol', 'Producer', 'assets/images/site/empire/Fields.jpg', [new SocialItem('twitter','inspiredmindz'), new SocialItem('soundcloud','inspiredmindz')])
    ];

    constructor(private mceService: MCEService){ }

    ngOnInit() :void{ }

    returnSocialUrl(social:SocialItem){
        return this.mceService.socialLink(social.site, social.handle);
    }
  }