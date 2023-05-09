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
} from '@chakra-ui/react';
import axios from 'axios';

export interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onSubmit: (data: any) => void;
  children?: React.ReactNode;
}

export default function CreateProductModal({
  isOpen,
  onClose,
}: // onSubmit,
CreateProductModalProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: any = {};
    try {
      const response = await axios.post(
        'http://localhost:3000/api/products/add-product',
        formData
      );
      console.log(response.data);
      onClose();
      // Do something with response, such as updating state or redirecting to another page
    } catch (error) {
      console.error(error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl id='title' mb={4}>
              <FormLabel>Product Name</FormLabel>
              <Input type='text' name='title' required />
            </FormControl>
            <FormControl id='content' mb={4}>
              <FormLabel>Product Description</FormLabel>
              <Input type='text' name='content' required />
            </FormControl>
            <FormControl id='imageUrl' mb={4}>
              <FormLabel>Product Image</FormLabel>
              <Input type='file' name='imageUrl' required />
            </FormControl>
            {/* <FormControl id='productPrice' mb={4}>
              <FormLabel>Product Price</FormLabel>
              <Input type='number' name='productPrice' required />
            </FormControl>
            <FormControl id='numberOfPurchases' mb={4}>
              <FormLabel>Number of Purchases</FormLabel>
              <Input type='number' name='numberOfPurchases' required />
            </FormControl>
            <FormControl id='availableProducts' mb={4}>
              <FormLabel>Available Products</FormLabel>
              <Input type='number' name='availableProducts' required />
            </FormControl> */}
            <Button type='submit' colorScheme='linkedin' mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
