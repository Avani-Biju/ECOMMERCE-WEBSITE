import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductCard } from "../../components/product-card/product-card";
import { Api } from '../../services/api';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products{

  data: any=[];

  constructor(private api:Api,private cdr:ChangeDetectorRef) {}
  ngOnInit() {
    this.api.getProducts().subscribe((res:any)=>{
      this.data=res
      this.cdr.detectChanges()
    })
  }
}
  /*
    {
      id: 1,
      image: 'https://i.etsystatic.com/65605882/r/il/6bd05e/8082510682/il_1588xN.8082510682_k14q.jpg',
      name: 'Floral Dress',
      price: 1499,
      rating: 4.3
    },
    {
      id: 2,
      image: 'https://i.etsystatic.com/65605882/r/il/81f04a/8070971066/il_1588xN.8070971066_nrqe.jpg',
      name: 'Evening Gown',
      price: 2499,
      rating: 4.6
    },
    {
      id: 3,
      image: 'https://i.etsystatic.com/65605882/r/il/1e9d3b/8118892819/il_1588xN.8118892819_hi7x.jpg',
      name: 'Party Dress',
      price: 1999,
      rating: 4.5
    }
  ];

}*/

