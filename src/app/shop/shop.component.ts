import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {


  products = [
    {
      id: 1,
      name: 'Bamboo Watch',
      category: 'Accessories',
      price: 65.00,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      image: 'bamboo-watch.jpg'
    },
    {
      id: 2,
      name: 'Black Watch',
      category: 'Accessories',
      price: 72.00,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      image: 'black-watch.jpg'
    },
    {
      id: 3,
      name: 'Blue Band',
      category: 'Fitness',
      price: 79.00,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
      image: 'blue-band.jpg'
    },
    {
      id: 4,
      name: 'Blue T-Shirt',
      category: 'Clothing',
      price: 29.00,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      image: 'blue-t-shirt.jpg'
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