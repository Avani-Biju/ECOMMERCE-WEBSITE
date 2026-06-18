import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Contacts } from './pages/contacts/contacts';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'contact', component: Contacts },
  {path: 'product/:id',component: ProductDetails}
];