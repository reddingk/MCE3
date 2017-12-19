import { Component, OnInit} from '@angular/core';

/* Data Models */
import { ResponseItem } from '../../datamodels/responseItem';

/* Service */
import { MCEService } from '../../services/mceService';

@Component({
    templateUrl: './contactus.html',
    styleUrls: ['./contactus.less']
  })
  export class ContactUsComponent implements OnInit {
    public backimg: String = "assets/images/site/contactus.jpg";
    public cardimg: String = "assets/images/logos/logoR.png";
    
    constructor(private mceService: MCEService){ }
   

    ngOnInit() :void{ }
  }