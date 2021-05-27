import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css']
})
export class TopProductComponent implements OnInit {

  constructor() { }

  imgList = ["assets/images/product01.png","assets/images/product02.png","assets/images/product08.png","assets/images/product09.png",];
  productList = ["assets/images/product01.png","assets/images/product02.png","assets/images/product08.png"];
  productList1 = ["assets/images/product04.png","assets/images/product05.png","assets/images/product06.png"];
  productList2= ["assets/images/product09.png","assets/images/product07.png","assets/images/product08.png"];
  imgTitleUrl : string = "assets/images/hotdeal.png";

  ngOnInit(): void {
  }

}
