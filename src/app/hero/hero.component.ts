import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
images : any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];


  constructor () {
  this.images = [
    {
      previewImageSrc: 'assets/landing2.svg',
      thumbnailImageSrc: 'assets/landing2.svg', 
      alt: 'Image 1',
      title: 'Image 1'
    },
    {
      previewImageSrc: 'assets/landing3.svg',
      thumbnailImageSrc: 'assets/landing3.svg',
      alt: 'Image 2',
      title: 'Image 2'
    },
    {
      previewImageSrc: 'assets/landing2.svg',
      thumbnailImageSrc: 'assets/landing2.svg', 
      alt: 'Image 3',
      title: 'Image 3'
    },
    {
      previewImageSrc: 'assets/landing3.svg',
      thumbnailImageSrc: 'assets/landing3.svg', 
      alt: 'Image 4',
      title: 'Image 4'
    },
    {
      previewImageSrc: 'assets/landing2.svg',
      thumbnailImageSrc: 'assets/landing2.svg', 
      alt: 'Image 5',
      title: 'Image 5'
    }
  ]
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
