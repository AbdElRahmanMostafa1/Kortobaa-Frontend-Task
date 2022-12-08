import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import arabicStrings from 'src/constants/strings';

@Component({
  selector: 'app-recent-searched-products',
  templateUrl: './recent-searched-products.component.html',
  styleUrls: ['./recent-searched-products.component.css']
})
export class RecentSearchedProductsComponent {
  newProducts: Product[] = [
    {
      name: 'تيشرت-كم طويل-آرت-نسائى',
      image: '../../assets/new-tshirt1.png',
      currentPrice: 90.00,
      previousPrice: 150.00,
      isNew: false,
      isOnSale: true,
      rate: 2
    },
    {
      name: 'تيشرت-كم طويل-آرت-نسائى',
      image: '../../assets/black-tshirt.png',
      currentPrice: 90.0,
      isNew: true,
      isOnSale: false,
      rate: 2
    },
    {
      name: 'تيشرت-كم طويل-آرت-نسائى',
      image: '../../assets/mobile.png',
      currentPrice: 90.0,
      isNew: true,
      isOnSale: false,
    },
    {
      name: 'تيشرت-كم طويل-آرت-نسائى',
      image: '../../assets/2-mobiles.png',
      currentPrice: 90.0,
      isNew: true,
      isOnSale: false,
      rate: 2

    },
  ];
  
  addToComparison = arabicStrings.addToComparison;
  recentSearchedProductsText = arabicStrings.recentSearchedProducts
  recentlyArrived = arabicStrings.recentlyArrived
  showAll = arabicStrings.showAll
}
