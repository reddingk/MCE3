import { Component, OnInit, ViewChild, ElementRef, Renderer} from '@angular/core';
import * as $ from 'jquery';

/* Data Models */
import { ResponseItem } from '../../datamodels/responseItem';
import { NewsItem } from '../../datamodels/newsItem';

/* Service */
import { MCEService } from '../../services/mceService';

@Component({
    templateUrl: './news.html',
    styleUrls: ['./news.less']
  })
  export class NewsComponent implements OnInit {
    public backimg: String = "assets/images/site/empire.jpg";    
    public news: NewsItem[] = [];
    private selectedId: String = null;
    private intervalId = null;

    constructor(private mceService: MCEService, private renderer: Renderer){ }    
    
    checkimg(imgUrl){
        return this.mceService.checkLocalImg(imgUrl);
    }
    /* Scroll */
    public scrollDeactivate(){
        clearInterval(this.intervalId);
    }

    public scrollContainer(container: string, item: string){
        var containerObj = $("#"+container);
        var itemObj = $("#"+item);
  
        if(containerObj != null){          
          let scrollLoc: number = itemObj[0].offsetTop - (itemObj[0].clientHeight *2);
          if(scrollLoc > 0){
            containerObj.animate({ scrollTop: scrollLoc}, "slow");
          }
        }
    }

    /* Build Article ID */
    buildId(title): string {
        let idVal:string = (title == undefined || title == null ? "NA" : title.replace(/\W/gi, '_'));
        return idVal;        
    }

    idIsSelected(title): string {
        var idVal = this.buildId(title);

        if(idVal == this.selectedId){
            return 'selected';
        }        
        return '';
    }
    /* choose selected */
    selectNews(title): void {
        var id = this.buildId(title);

        if( id != this.selectedId){          
            // set selectedID
            this.selectedId = id;
            // scroll news to top
            this.scrollContainer('allNews',id);
        }
        else {
            this.selectedId = null;
        }
    }

    /* Get News Data */
    getNews(): void {     
        this.mceService.getNews("ALL").subscribe(res => {
            if(res.error == null){
                this.news = res.response.news;          
            }
            else {
              console.log(res.error);
            }
        });
    }       

    ngOnInit() :void{
        this.getNews(); 
    }
  }