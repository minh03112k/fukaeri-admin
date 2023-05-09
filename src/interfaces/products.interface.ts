export interface IProductsTableList {
  id: string,
  productName: string,
  imageUrl: string,
  description: string,
  content: string,
  price: string,
  numberOfPurchases: string,
  avaiableProducts: string
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductsTable {
  listProducts: IProductsTableList[];
  handleReload: () => void;
}