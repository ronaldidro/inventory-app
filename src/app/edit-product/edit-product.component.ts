import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent {
  product: Product = new Product();
  id: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getById(this.id).subscribe({
      next: (data) => (this.product = data),
      error: (error) => console.log(error),
    });
  }

  onSubmit() {
    this.edit();
  }

  edit() {
    this.productService.edit(this.id, this.product).subscribe({
      next: (data) => {
        console.log('edited: ', data);
        this.router.navigate(['/products']);
      },
      error: (error) => console.log(error),
    });
  }
}
