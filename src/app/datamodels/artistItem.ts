export class ArtistItem {
    public name: string;
    public bio: string;
    public img: string;
    public bannerImg: string;

    constructor(Name: string, Bio: string, BannerImg: string){
        this.name = Name;
        this.bio = Bio;
        this.bannerImg = BannerImg;
     }
}