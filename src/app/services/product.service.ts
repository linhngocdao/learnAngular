import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IProduct } from '../models/Product';

const apiUrl = 'http://localhost:3001/products'; //lấy dữ liệu từ db.json

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor ( private http: HttpClient) {}

    getAllProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(apiUrl);
    }
    // lấy toàn bộ sản phẩm 

    getProduct(id: number | string): Observable<IProduct> {
        return this.http.get<IProduct>(`${apiUrl}/${id}`);
    }
    // lấy dữ liệu theo từng id
    addProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(apiUrl, product);
    }
    //thêm sản phẩm 
    updateProduct(product: IProduct): Observable<IProduct> {
        return this.http.put<IProduct>(`${apiUrl}/${product.id}`, product);
    }
    // cập nhận sản phẩm
    removeProduct(id: number | string): Observable<IProduct> {
        return this.http.delete<IProduct>(`${apiUrl}/${id}`);
    }
    // xóa sản phẩm 
}