import { Component, OnInit} from '@angular/core';

/* Data Models */
import { ResponseItem } from '../../datamodels/responseItem';
import { EventItem } from '../../datamodels/eventItem';

/* Service */
import { MCEService } from '../../services/mceService';

@Component({
    templateUrl: './events.html',
    styleUrls: ['./events.less']
  })
  export class EventsComponent implements OnInit {
    public backimg: String = "assets/images/site/empire.jpg"; 
    public coverimg: String = "assets/images/site/chords.jpg"; 
    public events: EventItem[] = [];

    constructor(private mceService: MCEService){ }
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
      
    /* Get Events Data */
    getEvents(): void {      
  
        this.mceService.getEventsByDate("ALL", "ALL").subscribe(res => {
          if(res.error == null){
            this.events = res.response.events;          
          }
          else {
            console.log(res.error);
          }
        });
      }
    
    ngOnInit() :void{
        this.getEvents(); 
    }
  }