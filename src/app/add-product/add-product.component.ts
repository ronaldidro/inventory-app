import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    this.save();
  }

  save() {
    this.productService.add(this.product).subscribe({
      next: (data) => {
        console.log('added: ', data);
        this.router.navigate(['/products']);
      },
      error: (error) => console.log(error),
    });
  }
}
