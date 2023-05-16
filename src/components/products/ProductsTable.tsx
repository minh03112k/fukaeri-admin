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
  Tooltip,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BsThreeDotsVertical, BsFillTrashFill } from 'react-icons/bs';

export default function ProductsTable(props: IProductsTable) {
  const { listProducts, handleReload } = props;
  console.log('listProducts', listProducts);
  const router = useRouter();
  const handleDeleteProduct = (id: string) => {
    productsApi.deleteProduct(id).then(res => {
      handleReload()
    }).catch(err => console.error(err))
  }
  
  return (
    <Box overflowX={'auto'}>
      <Table variant='simple' className='table-hover bg-white'>
        <Tbody>
          <Tr>
            <Th>Index</Th>
            <Th>Product Names</Th>
            <Th>Product Descriptions</Th>
            <Th>Product Prices</Th>
            <Th>Number Of Purchases</Th>
            <Th>Available Products</Th>
            <Th>Action</Th>
          </Tr>
          {listProducts?.map((item: IProductsTableList, index: number) => (
            <Tr key={item.id}>
              <Td>{index}</Td>
              <Td className='cursor-pointer' onClick={() => router.push(`/products/${item.id}`)}>{item.productName}</Td>
              <Td>{item.content}</Td>
              <Td>$ {item.price}</Td>
              <Td>{item.numberOfPurchases}</Td>
              <Td>{item.avaiableProducts}</Td>
              <Td className='text-center'>
                {/* <Menu>
                  <MenuButton>
                    <BsThreeDotsVertical />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleDeleteProduct(item.id)}>Delete</MenuItem>
                  </MenuList>
                </Menu> */}
                <Tooltip label='Delete Product'>
                  <Box as='button' onClick={() => handleDeleteProduct(item.id)}>
                    <BsFillTrashFill color='red' />
                  </Box>
                </Tooltip>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
