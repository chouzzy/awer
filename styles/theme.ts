import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Heebo',
      body:'Heebo'
   },
   colors: {
     salmon: "#F55F5E",
     wine: "#570A0A",
     gun: "#292F36",
     cyan:"#729EA1",
     salt: "#F0EFF4"
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          bg: 'gun',
          color: 'gray.900',
          
        },
       // styles for the `a`
        a: {
          // color: 'teal.500',
          _hover: {
            textDecoration: 'none',
          },
        },
     },
   },
 })