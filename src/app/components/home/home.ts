import { Component } from '@angular/core';
import { HighlightItem } from '../../datamodels/highlightItem';
import { GravityComponent } from '../_templates/gravity';

@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.less']
})
export class HomeComponent {
  carouselItems: HighlightItem[] = [
    new HighlightItem('Test','This is a test item','assets/images/demo/CMOG.jpeg'),
    new HighlightItem('Test2','This is a test item','assets/images/demo/IMG2.jpg'),
    new HighlightItem('Test3','This is a test item','assets/images/demo/panda1.jpeg')];
}
