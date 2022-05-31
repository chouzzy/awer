import {AppProps} from 'next/app'
import {ChakraProvider, extendTheme, Heading} from '@chakra-ui/react'

import { theme } from '../styles/theme'
import { Global } from '@emotion/react'
// import Fonts from './Fonts'


function MyApp({Component, pageProps}: AppProps) {
   return (
      
      <>
         <ChakraProvider theme={theme}>
            <Component {...pageProps}/>
         </ChakraProvider>
      </>
   ) 
}

export default MyApp