import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.get();
  }

  private get() {
    this.productService.get().subscribe((data) => (this.products = data));
  }

  edit(id: number) {
    this.router.navigate(['products/edit', id]);
  }

  delete(id: number) {
    this.productService.delete(id).subscribe({
      next: (data) => {
        console.log('response', data);
        this.get();
      },
      error: (error) => console.log(error),
    });
  }
}
