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

export interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  children?: React.ReactNode;
}

export default function CreateProductModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateProductModalProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    onSubmit(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl id='productName' mb={4}>
              <FormLabel>Product Name</FormLabel>
              <Input type='text' name='productName' required />
            </FormControl>
            <FormControl id='productDescription' mb={4}>
              <FormLabel>Product Description</FormLabel>
              <Input type='text' name='productDescription' required />
            </FormControl>
            <FormControl id='productPrice' mb={4}>
              <FormLabel>Product Price</FormLabel>
              <Input type='number' name='productPrice' required />
            </FormControl>
            <FormControl id='productImage' mb={4}>
              <FormLabel>Product Image</FormLabel>
              <Input type='file' name='productImage' required />
            </FormControl>
            <FormControl id='numberOfPurchases' mb={4}>
              <FormLabel>Number of Purchases</FormLabel>
              <Input type='number' name='numberOfPurchases' required />
            </FormControl>
            <FormControl id='availableProducts' mb={4}>
              <FormLabel>Available Products</FormLabel>
              <Input type='number' name='availableProducts' required />
            </FormControl>
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
