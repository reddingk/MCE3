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
    public backimg: String = "assets/images/site/events.jpg"; 
    public coverimg: String = "assets/images/site/chords.jpg"; 
    public events: EventItem[] = [];

    constructor(private mceService: MCEService){ }
    /* Check expiration date */
    checkDate(date: string): string {
      let status: string = "";

      /*const iDate = new Date(Date.now());
      const cDate = new Date(date);

      if( iDate > cDate){
        status = "expired";
      }*/
      status = (this.mceService.hasExpired(date) ? "expired" : "");

      return status;
    }

    /* clean Date */
    cleanDate(dateStr: string, type: string) {
      var ret = "";
      try {        
        ret = this.mceService.cleanDate(dateStr, type);
      }
      catch(ex){
        console.log("error proccessing date");
      }
      return ret;
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
    
    displayYear(index: number) : Boolean {
      let display: Boolean = false;

      let currentEvent: EventItem = this.events[index];
      let prevEvent: EventItem = null;

      if(index == 0){
        display = true;
      }
      else {
        prevEvent = this.events[index -1];
        /*var dc = new Date(currentEvent.date);
        var dp = new Date(prevEvent.date);

        if(dp.getFullYear() > dc.getFullYear()){
          display = true;
        }*/
        display = this.mceService.newYear(prevEvent.date, currentEvent.date);
      }

      return display;
    }

    ngOnInit() :void{
        this.getEvents(); 
    }
  }