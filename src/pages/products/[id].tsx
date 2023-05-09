import {
  Box,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
  theme,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Button } from '@chakra-ui/react';
import Image from 'next/image';

export default function ProductDetail() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');

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
          gridTemplateColumns={'13.75rem 1fr'}
          gap={6}>
          <GridItem>
            <Stack flexDirection={'column'} alignItems={'center'}>
              <img
                src={
                  !previewImageUrl
                    ? '/images/default-image.jpg'
                    : previewImageUrl
                }
                alt='Preview'
                style={{minHeight: '200px', minWidth: '200px'}}
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
                <label htmlFor=""></label>
                <Input placeholder='Product Name' size='lg' />
              </GridItem>
              <GridItem>
                <Input placeholder='Product Content' size='lg' />
              </GridItem>
              <GridItem>
                <Input placeholder='Product Price' size='lg' />
              </GridItem>
              <GridItem>
                <Input placeholder='Number Of Purchases' size='lg' />
              </GridItem>
              <GridItem>
                <Input placeholder='Available Products' size='lg' />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
