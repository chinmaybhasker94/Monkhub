import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private service : MainService) { }

  imgList = ["assets/images/product01.png","assets/images/product02.png","assets/images/product08.png","assets/images/product09.png",];
  imgTitleUrl : string = "assets/images/hotdeal.png";

  ngOnInit(): void {

    this.service.getProductList().subscribe(data=>{
      console.log(data);
    });
  }

}
