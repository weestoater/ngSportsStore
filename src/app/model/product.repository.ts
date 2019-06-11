import { Injectable, Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] =[];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
          .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }
}
