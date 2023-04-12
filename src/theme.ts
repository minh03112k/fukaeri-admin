import { extendTheme } from '@chakra-ui/react';

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: 'black',
      },
    },
  },
})

export default theme
