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
    // GEARS products
    {
      name: 'Tactical Backpack Pro',
      description: 'Durable tactical backpack with multiple compartments and MOLLE system.',
      price: 89,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Combat Vest',
      description: 'Lightweight combat vest with magazine pouches and utility attachments.',
      price: 125,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Survival Gear Kit',
      description: 'Complete survival gear kit for outdoor adventures and emergencies.',
      price: 156,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'LOWSTOCK',
      rating: 5
    },
    {
      name: 'Tactical Backpack Pro',
      description: 'Durable tactical backpack with multiple compartments and MOLLE system.',
      price: 89,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Tactical Gloves',
      description: 'Heavy-duty tactical gloves with reinforced knuckles and grip.',
      price: 34,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Tactical Backpack Pro',
      description: 'Durable tactical backpack with multiple compartments and MOLLE system.',
      price: 89,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Tactical Gloves',
      description: 'Heavy-duty tactical gloves with reinforced knuckles and grip.',
      price: 34,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Communication Headset',
      description: 'Military-grade communication headset with noise cancellation.',
      price: 178,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'OUTOFSTOCK',
      rating: 4
    },

    // HELMETS CATEGORY - 8 products
    {
      name: 'Ballistic Combat Helmet',
      description: 'Level IIIA ballistic helmet with night vision mount and side rails.',
      price: 245,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'helmets',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Tactical Bump Helmet',
      description: 'Lightweight bump helmet for training and non-ballistic protection.',
      price: 89,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'helmets',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'SWAT Team Helmet',
      description: 'Professional SWAT helmet with integrated communication system.',
      price: 189,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'helmets',
      stock: 'LOWSTOCK',
      rating: 5
    },
    {
      name: 'Riot Control Helmet',
      description: 'Full-face riot helmet with anti-fog visor and ventilation.',
      price: 134,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'helmets',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Military Flight Helmet',
      description: 'Advanced flight helmet with HUD compatibility and oxygen mask.',
      price: 456,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'helmets',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Paratrooper Helmet',
      description: 'Lightweight paratrooper helmet with chin strap and padding.',
      price: 112,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'helmets',
      stock: 'OUTOFSTOCK',
      rating: 4
    },
    {
      name: 'Fast Helmet System',
      description: 'Modular FAST helmet with rail system for accessories.',
      price: 178,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'helmets',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Special Forces Helmet',
      description: 'Elite special forces helmet with advanced protection features.',
      price: 289,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'helmets',
      stock: 'LOWSTOCK',
      rating: 5
    },

    // TOOLS CATEGORY - 8 products
    {
      name: 'Tactical Multi-Tool',
      description: 'Professional multi-tool with 15 functions including knife and pliers.',
      price: 67,
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop',
      category: 'tools',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Breaching Tool Set',
      description: 'Complete breaching tool set for tactical operations.',
      price: 234,
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop',
      category: 'tools',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Tactical Gloves',
      description: 'Heavy-duty tactical gloves with reinforced knuckles and grip.',
      price: 34,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Entrenching Tool',
      description: 'Folding entrenching tool for digging and cutting operations.',
      price: 45,
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop',
      category: 'tools',
      stock: 'LOWSTOCK',
      rating: 4
    },
    {
      name: 'Tactical Flashlight',
      description: 'High-intensity LED flashlight with strobe and SOS functions.',
      price: 78,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      category: 'tools',
      stock: 'INSTOCK',
      rating: 5
    },
    {
      name: 'Lock Pick Set',
      description: 'Professional lock pick set with tension wrenches and picks.',
      price: 56,
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop',
      category: 'tools',
      stock: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Wire Cutters Pro',
      description: 'Heavy-duty wire cutters for tactical and utility applications.',
      price: 34,
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop',
      category: 'tools',
      stock: 'OUTOFSTOCK',
      rating: 4
    },
    {
      name: 'Tactical Gloves',
      description: 'Heavy-duty tactical gloves with reinforced knuckles and grip.',
      price: 34,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      category: 'gears',
      stock: 'INSTOCK',
      rating: 4
    }
  ];

  // Get products grouped by category
  get productsByCategory() {
    const categories = ['gears', 'helmets', 'tools'];
    return categories.map(category => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      products: this.products.filter(product => product.category === category)
    }));
  }

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