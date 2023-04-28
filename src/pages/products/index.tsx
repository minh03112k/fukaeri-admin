import DataTable from '@/components/DataTable';
import CreateProductModal from '@/components/products/CreateProductModal';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const tableHeader = [
  'Product Names',
  'Product Descriptions',
  'Product Prices',
  'Product Images',
  'Number Of Purchases',
  'Available Products',
];

const tableData = [
  {
    productName: 'Product 1',
    productDescription: 'This is product 1',
    productPrice: 10.99,
    productImage: 'https://example.com/product1.jpg',
    numberOfPurchases: 50,
    availableProducts: 100,
  },
  {
    productName: 'Product 2',
    productDescription: 'This is product 2',
    productPrice: 20.99,
    productImage: 'https://example.com/product2.jpg',
    numberOfPurchases: 30,
    availableProducts: 50,
  },
  {
    productName: 'Product 3',
    productDescription: 'This is product 3',
    productPrice: 30.99,
    productImage: 'https://example.com/product3.jpg',
    numberOfPurchases: 20,
    availableProducts: 25,
  },
];

export default function Products() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleCreateProduct = (productData: any) => {
    // handle form submission here
    console.log(productData);
    setIsModalOpen(false);
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
    <Box w={'100%'} p={4}>
      <Button
        colorScheme='linkedin'
        mb={4}
        onClick={() => setIsModalOpen(true)}>
        Create Product
      </Button>

      <DataTable headers={tableHeader} data={tableData.map((product) => ({
          ...product,
          actions: (
            <>
              <Button colorScheme='blue' mr={2}>
                Edit
              </Button>
              <Button colorScheme='red'>Delete</Button>
            </>
          ),
        }))} />
      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateProduct}
      />
    </Box>
  );
}
