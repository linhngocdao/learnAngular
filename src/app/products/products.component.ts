import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
// export class ProductsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class ProductsComponent {
  title = 'my-app';
  productName: string = "Product A";
  productPrice: number = 2002;
  productStatus: boolean = false;
  productInfo: {id: number, price: number, name: string} ={
    id: 1,
    name: "Product A",
    price: 2002
  };
  productList: {id:number, price:number, name:string, status:boolean}[] = [
    {
      id: 1,
      name: "Product A",
      price: 2002,
      status:false
    },
    {
      id: 2,
      name: "Product B",
      price: 2003,
      status:true
    }
  ]
  onClick(){
    console.log('Click!');
    this.productStatus = !this.productStatus
  }
  onRemove(id : number){
    console.log(id);
  this.productList = this.productList.filter(product => product.id != id);
  }
  onHandleKeyPress(event: any) {
    console.log(event.target.value);
    this.title = event.target.value;
  }
}
