export class Category {
  constructor(public id: number,
              public name: string,
              public hasSubCategory: boolean,
              public parentId: number) { }
}

export class Product {
  constructor(public id: number,
              public name: string,
              public images: Array<any>,
              public oldPrice: number,
              public newPrice: number,
              public discount: number,
              public ratingsCount: number,
              public ratingsValue: number,
              public description: string,
              public stock: number,
              public categoryId: number) { }
}

export class ProductData {
  constructor(public name: string,
              public position: number,
              public price: number,
              public image: string,
              public stock: number) { }
}
