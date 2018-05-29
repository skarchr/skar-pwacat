import { Component, OnInit } from '@angular/core';
import { CatImage } from '../classes/cat-image';
import { Button } from '../classes/Button';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image:CatImage = {
    message:'Progressive Web Cat',
    api:'https://cataas.com/cat/says/',
    fontsize:40
  };
  
  public src:string;
  public button:Button = {
    text:'Give me another cat',
    color:'primary',
    disabled:false
  };

  constructor() { }

  ngOnInit() {
    this.src = this.image.api + this.image.message + 
      '?size=' + this.image.fontsize;
    if (!navigator.onLine) {
      this.button.text = 'Sorry, you\'re offline';
      this.button.disabled = true;
    }
  }

  generateSrc():void {
    this.src = this.image.api + this.image.message + '?size='+this.image.fontsize + '&ts=' + Date.now();
  }

}
