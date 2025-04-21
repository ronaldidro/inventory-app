import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlBase = 'http://localhost:8080/inventory/products';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urlBase);
  }

  add(product: Product): Observable<Object> {
    return this.httpClient.post(this.urlBase, product);
  }

  getById(id: number) {
    return this.httpClient.get<Product>(`${this.urlBase}/${id}`);
  }

  edit(id: number, product: Product): Observable<Object> {
    return this.httpClient.put<Product>(`${this.urlBase}/${id}`, product);
  }

  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.urlBase}/${id}`);
  }
}
