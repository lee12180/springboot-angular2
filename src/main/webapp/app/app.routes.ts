import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product/list/product-list.component';
import { ProductAddComponent } from './product/add/product-add.component';
import { LicenseListComponent } from './license/list/license-list.component';

export const routes:Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'license', component: LicenseListComponent},
  {path: 'product/add', component: ProductAddComponent},
];

//export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);