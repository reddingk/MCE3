import { SocialItem } from './socialItem';
import { ReleaseItem } from './releaseItem';
import { VideoReleaseItem } from './videoReleaseItem';

export class ArtistItem {
    public name: string;
    public bio: string;
    public title: string;
    public img: string;
    public bannerImg: string;
    public specialImg: string;
    public addImg: string[];
    public social: SocialItem[];
    public releases: ReleaseItem[];
    public videos: VideoReleaseItem[];

    constructor(Name: string, Title:string, Img: string, socialList: SocialItem[]){
        this.name = Name;
        this.title = Title;
        this.img = Img;
        this.social = socialList;
     }
}