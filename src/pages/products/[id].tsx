import {
  Box,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
  theme,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import productsApi from '@/api/productsApi';
import { useRouter } from 'next/router';
import { IProductsTableList } from '@/interfaces/products.interface';
import { ENV } from '@/config/env';

export default function ProductDetail() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');
  const [productData, setProductData] = useState<IProductsTableList>();
  const router = useRouter();
  const productId = router.query.id;
  console.log(productId);

  useEffect(() => {
    if (!productId) return;
    productsApi
      .getProduct(productId as string)
      .then((res) => {
        const data = res.data;
        setProductData(data);
        console.log('res', res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewImageUrl(imageUrl);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Box w={'100%'} p={6}>
      <Text fontSize={32} className='mb-4'>
        Product Detail
      </Text>
      <Box>
        <Grid
          bg={theme.colors.white}
          p={4}
          gridTemplateColumns={'15.75rem 1fr'}
          gap={6}>
          <GridItem>
            <Stack flexDirection={'column'} alignItems={'center'}>
              <img
                src={
                  previewImageUrl
                    ? previewImageUrl
                    : productData?.imageUrl
                    ? `${ENV.BASE_URL}/uploads/${productData.imageUrl}`
                    : '/images/default-image.jpg'
                }
                alt='Preview'
                style={{ height: '250px', maxHeight: '400px' }}
              />
              <Button w={'100%'} onClick={handleClick}>
                Upload Photo
                <input
                  ref={fileInputRef}
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </Button>
            </Stack>
          </GridItem>
          <GridItem>
            <Grid gridTemplateColumns={'1fr 1fr'} gap={6}>
              <GridItem>
                <FormLabel fontSize='sm' textColor='blue.700'>
                  Product Name
                </FormLabel>
                <Input
                  defaultValue={productData?.productName}
                  placeholder='Product Name'
                  size='lg'
                />
              </GridItem>
              <GridItem>
                <FormLabel fontSize='sm' textColor='blue.700'>
                  Product Content
                </FormLabel>
                <Input
                  defaultValue={productData?.content}
                  placeholder='Product Content'
                  size='lg'
                />
              </GridItem>
              <GridItem>
                <FormLabel fontSize='sm' textColor='blue.700'>
                  Product Price
                </FormLabel>
                <Input
                  defaultValue={productData?.price}
                  placeholder='Product Price'
                  size='lg'
                />
              </GridItem>
              <GridItem>
                <FormLabel fontSize='sm' textColor='blue.700'>
                  Number Of Purchases
                </FormLabel>
                <Input
                  defaultValue={productData?.numberOfPurchases}
                  placeholder='Number Of Purchases'
                  size='lg'
                />
              </GridItem>
              <GridItem>
                <FormLabel fontSize='sm' textColor='blue.700'>
                  Available Products
                </FormLabel>
                <Input
                  defaultValue={productData?.avaiableProducts}
                  placeholder='Available Products'
                  size='lg'
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
