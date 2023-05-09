import productsApi from '@/api/productsApi';
import {
  IProductsTable,
  IProductsTableList,
} from '@/interfaces/products.interface';
import {
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function ProductsTable(props: IProductsTable) {
  const { listProducts, handleReload } = props;
  console.log('listProducts', listProducts);

  const handleDeleteProduct = (id: string) => {
    productsApi.deleteProduct(id).then(res => {
      handleReload()
    }).catch(err => console.error(err))
  }
  
  return (
    <Box overflowX={'auto'}>
      <Table variant='simple' className='bg-white'>
        <Tbody>
          <Tr>
            <Th>Product Names</Th>
            <Th>Product Descriptions</Th>
            <Th>Product Prices</Th>
            <Th>Number Of Purchases</Th>
            <Th>Available Products</Th>
          </Tr>
          {listProducts?.map((item: IProductsTableList, index: number) => (
            <Tr key={item.id}>
              <Td>{item.productName}</Td>
              <Td>{item.content}</Td>
              <Td>$ {item.price}</Td>
              <Td>{item.numberOfPurchases}</Td>
              <Td>{item.avaiableProducts}</Td>
              <Td className='text-center'>
                <Menu>
                  <MenuButton>
                    <BsThreeDotsVertical />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Detail</MenuItem>
                    <MenuItem onClick={() => handleDeleteProduct(item.id)}>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
