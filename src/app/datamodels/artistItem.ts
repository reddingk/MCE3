import { SocialItem } from './socialItem';
import { ReleaseItem } from './releaseItem';
import { VideoReleaseItem } from './videoReleaseItem';

export class ArtistItem {
    public name: string;
    public bio: string;
    public img: string;
    public bannerImg: string;
    public addImg: string[];
    public social: SocialItem[];
    public releases: ReleaseItem[];
    public videos: VideoReleaseItem[];

    constructor(Name: string, Bio: string, BannerImg: string){
        this.name = Name;
        this.bio = Bio;
        this.bannerImg = BannerImg;
     }
}