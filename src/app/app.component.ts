import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { Product } from './models/product.model';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zajecia';
  pokazProdukty = true;
  koszykWartosc = 0;

  produkty: Product[] = [
    new Product('Produkt 1', 20.00, new Date(2001, 8, 30), false),
    new Product('Produkt 2', 10.99, new Date(2020, 4, 10), true),
    new Product('Produkt 3', 15.50, new Date(2023, 2, 21), false),
    new Product('Produkt 4', 40.00, new Date(2022, 11, 1), true),
    new Product('Produkt 5', 5.99, new Date(2019, 6, 5), false)
  ];

  dodajDoKoszyka(cena: number, produkt: Product) {
    this.koszykWartosc += cena;
    produkt.liczbaSztukWKoszyku++;
  }

  resetujKoszyk() {
    this.koszykWartosc = 0;
    for (let p of this.produkty) {
      p.liczbaSztukWKoszyku = 0;
    }
  }

  toggleProdukty() {
    this.pokazProdukty = !this.pokazProdukty;
  }
}
