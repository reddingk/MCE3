export class HighlightItem {
    public image: string;
    public title: string;
    public text: string;

    constructor(Title: string, TextStr: string, Image: string){
        this.image = Image;
        this.title = Title;
        this.text = TextStr;
     }
}