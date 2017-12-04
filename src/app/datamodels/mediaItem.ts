export class MediaItem {   
    public url: string;
    public type: string;
    public title: string;
    public artist: string;

    constructor(Title: string, Artist: string, Url: string){
        this.url = Url;
        this.title = Title;
        this.artist = Artist;
    }

    public returnTypeUrl(type){
        let retUrl: string = (type == "video"? "https://www.youtube.com/embed/"+ this.url : "http://img.youtube.com/vi/"+ this.url+"/default.jpg");
        return retUrl;
    }
}