import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {

  productId: number = 0;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    this.productId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.http
      .get(`https://fakestoreapi.com/products/${this.productId}`)
      .subscribe((data) => {

        this.product = data;

        console.log(this.product);

      });

  }

}