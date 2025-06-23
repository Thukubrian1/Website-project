import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  images = [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
      alt: 'Earthen Bottle'
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
      alt: 'Nomad Tumbler'
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
      alt: 'Focus Paper Refill'
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
      alt: 'Machined Mechanical Pencil'
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
      alt: 'Leather Journal'
    }
  ];

  currentIndex = 0;

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  
  products = [
    {
      name: 'Bamboo Watch',
      description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      price: 65,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
      category: 'Accessories',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Black Watch',
      description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      price: 72,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
      category: 'Accessories',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Blue Band',
      description: 'Person using a pen to cross a task off a productivity paper card.',
      price: 79,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
      category: 'Fitness',
      stock: 'LOWSTOCK',
      rating: 3
    },
    {
      name: 'Blue T-Shirt',
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      price: 29,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
      category: 'Clothing',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Leather Journal',
      description: 'Handmade leather journal with a strap closure and blank pages inside.',
      price: 55,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
      category: 'Accessories',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Ceramic Mug',
      description: 'White ceramic mug with a black interior and handle.',
      price: 25,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
      category: 'Accessories',
      stock: 'OUTOFSTOCK',
      rating: 3
    },
    {
      name: 'Wooden Desk Organizer',
      description: 'Natural wood desk organizer with multiple compartments for storage.',
      price: 75,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
      category: 'Accessories',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Bamboo Watch',
      description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      price: 65,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
      category: 'Accessories',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Black Watch',
      description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      price: 72,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
      category: 'Accessories',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Blue Band',
      description: 'Person using a pen to cross a task off a productivity paper card.',
      price: 79,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
      category: 'Fitness',
      stock: 'LOWSTOCK',
      rating: 3
    },
    {
      name: 'Blue T-Shirt',
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      price: 29,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
      category: 'Clothing',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Leather Journal',
      description: 'Handmade leather journal with a strap closure and blank pages inside.',
      price: 55,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
      category: 'Accessories',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Ceramic Mug',
      description: 'White ceramic mug with a black interior and handle.',
      price: 25,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
      category: 'Accessories',
      stock: 'OUTOFSTOCK',
      rating: 3
    },
    {
      name: 'Wooden Desk Organizer',
      description: 'Natural wood desk organizer with multiple compartments for storage.',
      price: 75,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
      category: 'Accessories',
      stock: 'INSTOCK',
      rating: 5
    }
  ];

  getStockBadgeClass(stock: string): string {
    switch (stock) {
      case 'INSTOCK':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'LOWSTOCK':
        return 'bg-orange-100 text-orange-800 border border-orange-200';
      case 'OUTOFSTOCK':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  }

  getStarArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStarArray(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }

  // Add click handlers for the buttons
  onBuyNow(product: any): void {
    console.log('Buy now clicked for:', product.name);
    // Add your buy now logic here
  }

  onAddToWishlist(product: any): void {
    console.log('Add to wishlist clicked for:', product.name);
    // Add your wishlist logic here
  }
}