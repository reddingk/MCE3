export class VideoReleaseItem {   
    public title: string;
    public type: string;
    public artist: string;
    public date: string;
    public text: string;
    public urlcode: string;
    public spotlight: boolean;

    constructor(){}  
    
    public returnTypeUrl(type){
        let retUrl: string = (type == "video"? "https://www.youtube.com/embed/"+ this.urlcode : "http://img.youtube.com/vi/"+ this.urlcode+"/default.jpg");
        return retUrl;
    }

}