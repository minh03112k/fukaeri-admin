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

export interface IParamsCreateProduct {
  productName: string,
  imageUrl: File | null,
  content: string,
  price: string,
}

export interface IParamsUpdatedProduct {
  productName: string,
  imageUrl: File | null,
  content: string,
  price: string,
}

export interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  handleReload: () => void;
}

