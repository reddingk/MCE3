import { Component, OnInit, ViewChild, ElementRef, Renderer} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';

/* Data Models */
import { ResponseItem } from '../../datamodels/responseItem';
import { NewsItem } from '../../datamodels/newsItem';

/* Service */
import { MCEService } from '../../services/mceService';
import { setInterval } from 'timers';

@Component({
    templateUrl: './news.html',
    styleUrls: ['./news.less']
  })
  export class NewsComponent implements OnInit {
    public backimg: String = "assets/images/site/release.jpg";    
    public news: NewsItem[] = [];
    private selectedId: String = null;
    private intervalId = null;

    constructor(private mceService: MCEService, private renderer: Renderer, private route: ActivatedRoute){ }    
    
    checkimg(imgUrl){
        return this.mceService.checkLocalImg(imgUrl);
    }
    
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

    /* Scroll */
    public scrollDeactivate(){
        clearInterval(this.intervalId);
    }

    public scrollContainer(container: string, item: string, recursive: boolean){
        var containerObj = $("#"+container);
        var itemObj = $("#"+item);
        var that = this;

        if(containerObj != null  && containerObj.length > 0 && itemObj != null  && itemObj.length > 0){
          clearInterval(this.intervalId);
          
          if(!itemObj[0].classList.contains("selected")){
            this.intervalId = setTimeout(function() {
                that.scrollContainer(container, item, false);
            }, 400);
          }
          else {
            this.intervalId = setTimeout(function(){
                let scrollLoc: number = itemObj[0].offsetTop - itemObj[0].clientHeight;
                if(scrollLoc > 0){
                    containerObj.animate({ scrollTop: scrollLoc}, "slow");
                }
                else{
                    containerObj.animate({ scrollTop: 0}, "slow");
                }
              }, 500);            
          }
        }
        else if(recursive){
            this.intervalId = setTimeout(function() {
                that.scrollContainer(container, item, recursive);
            }, 400);
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
    selectNews(title, recursive): void {
        var id = this.buildId(title);

        if( id != this.selectedId){          
            // set selectedID
            this.selectedId = id;

            // scroll news to top
            this.scrollContainer('allNews',id, recursive);
        }
    }

    /* Close Selected */
    closeSelected(){
        this.selectedId = null;
    }

    /* Get News Data */
    getNews(): void {     
        this.mceService.getNews("ALL").subscribe(res => {
            if(res.error == null){
                this.news = res.response.news;  
                this.getParameters();                
            }
            else {
              console.log(res.error);
            }
        });
    }   
    
    getParameters(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
              const id = params['id'];
              this.selectNews(id, true);
            }
            else {
              console.log("Invalid News Id");
            }
        });
    }

    ngOnInit() :void{
        this.getNews();
    }

  }