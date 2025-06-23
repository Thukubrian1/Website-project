import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  layout: 'list' | 'grid' = 'list'; // Default layout for the data view
  options: string[] = ['grid', 'list']; // Options for layout switch

  products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      price: 29.99,
      inventoryStatus: 'INSTOCK',
      rating: 4.5,
      image: 'bamboo-watch.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      price: 49.99,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 3.8,
      image: 'black-watch.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Category 3',
      price: 19.99,
      inventoryStatus: 'LOWSTOCK',
      rating: 4.2,
      image: 'blue-band.jpg'
    },
    {
      id: 4,
      name: 'Product 4',
      category: 'Category 4',
      price: 99.99,
      inventoryStatus: 'INSTOCK',
      rating: 5.0,
      image: 'bracelet.jpg'
    }
  ];

  getSeverity(product: any): string {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }
}