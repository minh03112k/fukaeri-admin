import productsApi from '@/api/productsApi';
import { CreateProductModalProps, IParamsCreateProduct } from '@/interfaces/products.interface';
import { CreateProductInit } from '@/mocks/product';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function CreateProductModal(props: CreateProductModalProps) {
  const { isOpen, onClose, handleReload } = props;
  const [createNewProductParams, setCreateNewProductParams] = useState<IParamsCreateProduct>(CreateProductInit);
  const [imageFile, setImageFile] = useState<File | null>(null);

  console.log('imageFile', imageFile)

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setCreateNewProductParams({
      ...createNewProductParams,
      [name]: value,
    });
  };
  

  const handleImageChange = (event: any) => {
    console.log('event.target', event)
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(createNewProductParams).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    if (imageFile) {
      formData.append("imageUrl", imageFile);
    }
    console.log('formData', formData);
    productsApi.addProduct(formData).then(res => {
      if(res && res.data) {
        handleReload();
        onClose();
      }
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            id='newProductForm'
            method='post'
            as='form'
            onSubmit={handleSubmit}>
            <FormControl id='productName' mb={4}>
              <FormLabel>Product Name</FormLabel>
              <Input
                type='text'
                name='productName'
                onChange={(event) => handleOnChange(event)}
                required
              />
            </FormControl>
            <FormControl id='content' mb={4}>
              <FormLabel>Product Description</FormLabel>
              <Input
                type='text'
                name='content'
                onChange={(event) => handleOnChange(event)}
                required
              />
            </FormControl>
            <FormControl id='imageUrl' mb={4}>
              <FormLabel>Product Image</FormLabel>
              <Input
                type='file'
                name='imageUrl'
                onChange={handleImageChange}
                required
              />
            </FormControl>
            <FormControl id='price' mb={4}>
              <FormLabel>Product Price</FormLabel>
              <Input
                type='number'
                name='price'
                onChange={(event) => handleOnChange(event)}
                required
              />
            </FormControl>
            <Button
              type='submit'
              form='newProductForm'
              colorScheme='linkedin'
              mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
