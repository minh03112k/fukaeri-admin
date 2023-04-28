import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "../theme";
import Layout from '@/components/Layout';
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS


export default function App({ Component, pageProps }: AppProps) {


  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
