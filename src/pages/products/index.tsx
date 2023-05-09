import DataTable from '@/components/products/ProductsTable';
import CreateProductModal from '@/components/products/CreateProductModal';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsTable from '@/components/products/ProductsTable';
import productsApi from '@/api/productsApi';
import { error } from 'console';
import { IProductsTableList } from '@/interfaces/products.interface';

const tableHeader = [
  'Product Names',
  'Product Descriptions',
  'Product Prices',
  'Product Images',
  'Number Of Purchases',
  'Available Products',
];

// const tableData = [
//   {
//     productName: 'Product 1',
//     productDescription: 'This is product 1',
//     productPrice: 10.99,
//     productImage: 'https://example.com/product1.jpg',
//     numberOfPurchases: 50,
//     availableProducts: 100,
//   },
//   {
//     productName: 'Product 2',
//     productDescription: 'This is product 2',
//     productPrice: 20.99,
//     productImage: 'https://example.com/product2.jpg',
//     numberOfPurchases: 30,
//     availableProducts: 50,
//   },
//   {
//     productName: 'Product 3',
//     productDescription: 'This is product 3',
//     productPrice: 30.99,
//     productImage: 'https://example.com/product3.jpg',
//     numberOfPurchases: 20,
//     availableProducts: 25,
//   },
// ];

export interface ProductsData {
  id: string;
  title: string;
  imageUrl: string;
}

export default function Products() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [productsData, setProductsData] = useState<IProductsTableList[]>([]);
  const [isReload, setIsReload] = useState<boolean>(false);

  useEffect(() => {
    productsApi.getListProducts().then(res => {
      const data = res?.data;
      setProductsData(data);
    }).catch(err => console.error(err))
  }, [isReload]);

  const handleReload = () => {
    setIsReload(!isReload);
  };

  const handleEditProduct = (productData: any) => {
    // handle form submission here
    console.log(productData);
    setIsEditModalOpen(false);
  };

  const handleEditButtonClick = (product: any) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  return (
    <Box w={'100%'} p={6}>
      <Button
        colorScheme='linkedin'
        mb={4}
        onClick={() => setIsModalOpen(true)}>
        Create Product
      </Button>
      <Box>
        <ProductsTable listProducts={productsData} handleReload={handleReload}/>
      </Box>

      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Box>
  );
}
