import { Box, Button, chakra, Container, Flex, Grid, GridItem, HStack, IconButton, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure, VStack } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import {Link as Slink} from 'react-scroll'
import { useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { RiMenuLine } from "react-icons/ri";
import { NavItem } from "./nav-item";

export function Navbar() { 
   const [display, changeDisplay] = useState('none')

   const menu =[
      {name:'O que fazemos ▪', id:'#Home'},
      {name:'Clientes ▪', id:'#clientes'},
      {name:'Produtos ▪', id:'#cases'},
      {name:'Quem somos ▪', id:'#quemsomos'},
      {name:'Contato',id:'#contatos'}
   ]

   return (
      <Grid w='100%' py={5}  templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(8, 1fr)']} 
      alignItems='baseline'
      gap={0} textAlign='center' >
         {/* Logo */}
         <GridItem colStart={[0,0,0,1]} colEnd={[2,2,2,3]}>
            <Link href=''>
               <Image  src={"static/img/nav-logo.png"} maxW={['160px','216px','264px','216px']} mx='auto' alt='Logo da Awer' />
            </Link>
         </GridItem>
         
         {/* {Menu} */}
         <GridItem colStart={3} colEnd={8} mt='auto' display={['none', 'none', 'none','GridItem']} fontWeight='300' color='salt' >
            <HStack spacing={2} mx='auto' fontSize='0.82rem' letterSpacing={2}>
                  {menu.map(item => {
                     return (
                        <NavItem
                        to={item.id}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        cursor='pointer' _hover={{color: "salmon"}} textTransform='uppercase'
                        content={item.name}
                        />
                  )})}
               
            </HStack>
         </GridItem>
         {/* Social media */}
         <GridItem colStart={8} colEnd={9}  mt='auto' display={['none', 'none', 'none','GridItem']} >

            <SimpleGrid ml={4} spacing={2} columns={3} fontSize='1.5rem'>
               <Link  _hover={{color: "salt"}} color='salmon' mt='auto' href='https://www.facebook.com/daterraoficial?ref=hl'> <FaLinkedin/> </Link>
               <Link _hover={{color: "salt"}} color='salmon' mt='auto' href='https://www.instagram.com/farmaciadaterra/'> <FaInstagram/> </Link>
               <Link  _hover={{color: "salt"}} color='salmon' mt='auto' href='https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos'> <BsWhatsapp/> </Link>
            </SimpleGrid >
         </GridItem>

         {/* Mobile button */}
         <IconButton
               aria-label="Open Menu"
               size="lg"
               ml='auto'
               mr={4}
               mt='-10px'
               bg='salmon'
               icon={
                  <RiMenuLine color='white' />
               }
               onClick={() => changeDisplay('flex')}
               display={['flex', 'flex', 'flex', 'none']}
         />
         {/* Mobile menu content  */}
         <Flex
            w='100vw'
            display={display}
            bgColor="gun"
            zIndex={20}
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
         >
            <Flex justify="flex-end">
               <IconButton
                  mt={2}
                  mr={4}
                  aria-label="Open Menu"
                  size="lg"
                  bg='salmon'
                  icon={
                  <RiMenuLine color='white' />
                  }
                  onClick={() => changeDisplay('none')}
               />
            </Flex>

            <Flex
               flexDir="column"
               align="left"
               fontSize='1.3rem'
            >
               <VStack color='salt'>

                  {menu.map(item => {
                     return (
                        <NavItem
                        to={item.id}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        cursor='pointer' _hover={{color: "salmon"}} textTransform='uppercase'
                        onClick={() => changeDisplay('none')}
                        content={item.name.replace('▪','')}
                        />
                  )})}
               </VStack>

               <SimpleGrid mx='auto' spacing={4} borderTop='1px solid salmon' columns={3} py={3} mt='auto' fontSize='1.6rem'>
                  <Link  _hover={{color: "salt"}} color='salmon' mt='auto' href='https://www.facebook.com/daterraoficial?ref=hl'> <FaLinkedin/> </Link>
                  <Link _hover={{color: "salt"}} color='salmon' mt='auto' href='https://www.instagram.com/farmaciadaterra/'> <FaInstagram/> </Link>
                  <Link  _hover={{color: "salt"}} color='salmon' mt='auto' href='https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos'> <BsWhatsapp/> </Link>
               </SimpleGrid >
            </Flex>

         </Flex>

      </Grid>
   )
}