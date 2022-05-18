import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
@Input('data') productList!: IProduct[];
productDetail!: IProduct

  ngOnInit(): void {
  }

  showDetail(id: number){
    this.productDetail = this.productList.find(item => item.id ===id)!;
  }
}
