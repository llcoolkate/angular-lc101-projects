import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cramblin Duvet';
  image1 = 'https://www.gannett-cdn.com/-mm-/69b7aec62f5ef0463a7bc8328492b59c29e411ad/c=0-72-1644-1001/local/-/media/2018/06/14/DetroitFreeP/DetroitFreePress/636645935871371058-detroiters-02-001-16.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp';
  image2 = 'https://cdn.pastemagazine.com/www/articles/2021/03/30/detroiters_ads_main.JPG';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThApmhKf-8czR0anLTkyRSCpTcRJxkXZOR2A&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}