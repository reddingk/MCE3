export class NewsItem {
    public img: string;
    public type: string;
    public title: string;
    public text: string;

    constructor(Title: string, Img: string, TextStr: string){
        this.img = Img;
        this.title = Title;
        this.text = TextStr;
     }
}