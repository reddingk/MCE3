export class NewsItem {
    public title: string;
    public spotlight: boolean;
    public date: string;
    public type: string;
    public img: string;
    public content: string;  
    public text: string;
    public links: {url:string, text:string}[];

    constructor(Title: string, Img: string, TextStr: string){
        this.img = Img;
        this.title = Title;
        this.text = TextStr;
     }
}