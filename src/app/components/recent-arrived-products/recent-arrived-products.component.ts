import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import arabicStrings from 'src/constants/strings';

@Component({
  selector: 'app-recent-arrived-products',
  templateUrl: './recent-arrived-products.component.html',
  styleUrls: ['./recent-arrived-products.component.css']
})
export class RecentArrivedProductsComponent {
  recentSearchedProducts: Product[] = [
    {
      name: 'تيشرت-كم طويل-آرت',
      image: '../../assets/pink-t-shirt.png',
      currentPrice: 90.0,
      isNew: true,
      isOnSale: false,
    },
    {
      name: 'تيشرت-كم طويل-آرت',
      image: '../../assets/necklace.png',
      currentPrice: 90.0,
      isNew: false,
      isOnSale: true,
      previousPrice: 150.0,
    },
    {
      name: 'تيشرت-كم طويل-آرت',
      image: '../../assets/baby-tshirt.png',
      currentPrice: 90.0,
      isNew: false,
      isOnSale: false,
    },
  ];

  recentSearchedProductsText= arabicStrings.recentSearchedProducts
}
