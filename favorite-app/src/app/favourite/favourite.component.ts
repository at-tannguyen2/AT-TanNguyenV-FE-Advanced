import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  listProduct = [
    {
      id: 1,
      img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png',
      content: 'Manchester United FC',
      isActive: false,
      amount: 10
    },
    {
      id: 2,
      img: 'https://cdn.worldvectorlogo.com/logos/chelsea-fc.svg',
      content: 'Chelsea FC',
      isActive: false,
      amount: 12
    },
    {
      id: 3,
      img: 'https://cdn.freebiesupply.com/images/thumbs/2x/manchester-city-logo.png',
      content: 'Manchester City FC',
      isActive: false,
      amount: 22
    },
    {
      id: 4,
      img: 'https://brasol.vn/public/ckeditor/uploads/tin-tuc/1-thiet-ke-logo-arsenal.png',
      content: 'Arsenal FC',
      isActive: false,
      amount: 11
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
