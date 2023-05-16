import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  FormControl,
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
import productsApi from '@/api/productsApi';
import { useRouter } from 'next/router';
import {
  IParamsCreateProduct,
  IProductsTableList,
} from '@/interfaces/products.interface';
import { ENV } from '@/config/env';
import { routes } from '@/constants/router';
import NextLink from 'next/link';
import { CreateProductInit } from '@/mocks/product';
import useStyledToast from '@/hooks/useStyledToast';
import { Metacode } from '@/enum/enum-info';

export default function ProductDetail() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');
  const [productData, setProductData] = useState<IProductsTableList>();
  const [updatedNewProductParams, setUpdatedNewProductParams] =
    useState<IParamsCreateProduct>(CreateProductInit);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isReload, setIsReload] = useState<boolean>(false);
  const { toastMsg, handleToastError } = useStyledToast();

  const router = useRouter();
  const productId = router.query.id as string;

  useEffect(() => {
    if (!productId) return;
    productsApi
      .getProduct(productId)
      .then((res) => {
        const data = res.data;
        setProductData(data);
        console.log('res', res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  const handleReload = () => {
    setIsReload(!isReload);
  };

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setUpdatedNewProductParams({
      ...updatedNewProductParams,
      [name]: value,
    });
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files?.[0];
    setImageFile(selectedFile);

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewImageUrl(imageUrl);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(updatedNewProductParams).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    if (imageFile) {
      formData.append('imageUrl', imageFile);
    }
    console.log('formData', formData);
    productsApi
      .updateProduct(productId, formData)
      .then((res) => {
        if (res.status === Metacode.SUCCESS) {
          toastMsg('Updated', 'success');
          handleReload();
        }
      })
      .catch((error) => {
        handleToastError(error);
      });
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Box w={'100%'} p={6}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href={routes.PRODUCTS} as={NextLink}>
            Products Management
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Text>Product Detail</Text>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box
        as='form'
        id='updatedProductForm'
        method='post'
        onSubmit={handleSubmit}
        backgroundColor={theme.colors.white}
        p={4}>
        <Grid gridTemplateColumns={'15.75rem 1fr'} gap={6}>
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
              <Button w={'100%'} colorScheme={'blue'} onClick={handleClick}>
                Upload Photo
                <Input
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
                <FormControl id='productName'>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    defaultValue={productData?.productName}
                    type='text'
                    placeholder='Product Name'
                    size='lg'
                    name='productName'
                    onChange={(event) => handleOnChange(event)}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id='content'>
                  <FormLabel>Product Content</FormLabel>
                  <Input
                    defaultValue={productData?.content}
                    type='text'
                    placeholder='Product Content'
                    size='lg'
                    name='content'
                    onChange={(event) => handleOnChange(event)}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id='price'>
                  <FormLabel>Product Price</FormLabel>
                  <Input
                    defaultValue={productData?.price}
                    type='text'
                    placeholder='Product Price'
                    size='lg'
                    name='price'
                    onChange={(event) => handleOnChange(event)}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormLabel fontSize='sm' textColor='blue.700'>
                  Number Of Purchases
                </FormLabel>
                <Input
                  defaultValue={productData?.numberOfPurchases}
                  placeholder='Number Of Purchases'
                  size='lg'
                  disabled
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
                  disabled
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
        <Stack
          mt={4}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexDirection={'row'}>
          <Button colorScheme={'red'} onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type='submit' form='updatedProductForm' colorScheme={'green'}>
            Save
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
