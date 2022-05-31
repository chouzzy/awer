import { Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Container_1 } from './components/Container_1'
import { Container_2 } from './components/Container_2'
import { Container_3 } from './components/Container_3'
import { Container_5 } from './components/Container_5'
import { Container_6 } from './components/Container_6'
export default function Home () {
   return (
      <>
         <Head>
            <title>awer.co</title>
         </Head>
         <Container_1/>
         <Container_2/>
         <Container_3/>
         <Container_5/>
         <Container_6/>
      </>

   )
}