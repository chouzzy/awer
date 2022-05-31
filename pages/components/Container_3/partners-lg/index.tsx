import { Flex, Grid, GridItem, HStack, Image } from "@chakra-ui/react";


export function PartnersLg() { 

   return (

      <>
            
            <Flex bg='#F0EFF4ea' mx='auto' minW='240px' 
            _hover={{bg:'white', transition:'300ms', mb:'24px'}} 
            boxShadow='xl' h='180px'  borderRadius='10px'>
               <Image  maxW='200px' mx='auto'  objectFit='contain' src={"static/img/clientes/lindacor.png"} alt='Banner inicial' />
            </Flex>
            
            <Flex bg='#F0EFF4ea' mx='auto'  minW='240px'  
            _hover={{bg:'white', transition:'300ms', mb:'24px'}} 
            boxShadow='xl' h='180px' borderRadius='10px'>

               <Image maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/greensheep.png"} alt='Banner inicial' />

            </Flex>
            
            <Flex  bg='#F0EFF4ea' mx='auto'  minW='240px' 
            _hover={{bg:'white', transition:'300ms', mb:'24px'}} 
            boxShadow='xl' h='180px'  borderRadius='10px'>

               <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/blendquimica.png"} alt='Banner inicial' />

            </Flex>
            
            <Flex bg='#F0EFF4ea' mx='auto'  minW='240px' 
            _hover={{bg:'white', transition:'300ms', mb:'24px'}} 
            boxShadow='xl' h='180px'  borderRadius='10px'>

               <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/daterra2.png"} alt='Banner inicial' />

            </Flex>
      </>
   )
}