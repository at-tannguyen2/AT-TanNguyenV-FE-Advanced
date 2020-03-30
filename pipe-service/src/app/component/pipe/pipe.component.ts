import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  arrProduct = [
    {
      id: 1,
      title: 'Giá xăng giảm xuống thấp nhất 11 năm',
      src: 'https://znews-photo.zadn.vn/w660/Uploaded/chuobun/2020_03_29/Xang_30.3.jpg',
      content: 'Từ 15h chiều nay (29/3), giá xăng E5 RON 92 trong nước giảm 4.100 đồng/lít, xuống còn 11.956 đồng/lít'
    },
    {
      id : 2,
      title: 'Mời Facebooker Nguyễn Sin làm việc vụ loan tin người chết vì Covid-19',
      src: 'https://znews-photo.zadn.vn/w660/Uploaded/aobohun/2020_03_26/NguyenSin2.jpg',
      content: 'TP.HCM đã mời chủ tài khoản Facebook Nguyễn Sin đến làm việc với thanh tra sở vào thứ hai, 30/3.'
    },
    {
      id: 3,
      title: 'Thiếu nữ 16 tuổi tử vong vì virus corona gây rúng động nước Pháp',
      src: 'https://znews-photo.zadn.vn/w1024/Uploaded/pgi_dhbpgunat/2020_03_29/nz_parisjog_280348.jpg',
      content: 'Hơn một tuần trước, Julie, 16 tuổi bị ho nhẹ. Hôm 25/3, cô bé trở thành ca tử vong trẻ tuổi nhất vì virus corona ở Pháp.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
