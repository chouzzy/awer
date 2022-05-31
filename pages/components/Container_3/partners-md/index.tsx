import { Flex, HStack, Image, useBreakpointValue } from "@chakra-ui/react";


export function PartnersMd() { 

   return (
         <>
         <HStack  spacing={10} justifyContent='center' p={5} borderRadius='50px' >
               <Flex bg='#F0EFF4ea' _hover={{bg:'white', transition:'300ms'}} boxShadow='xl' alignItems='center' h='180px' p={5} borderRadius='10px'>
                  <Image  maxW='200px'   objectFit='contain' src={"static/img/clientes/lindacor.png"} alt='Banner inicial' />
               </Flex>
               <Flex bg='#F0EFF4ea'  _hover={{bg:'white', transition:'300ms'}} boxShadow='xl' alignItems='center' h='180px' p={5} borderRadius='10px'>
                  <Image maxW='200px'  objectFit='contain' src={"static/img/clientes/greensheep.png"} alt='Banner inicial' />
               </Flex>
         </HStack>   

         <HStack spacing={10} justifyContent='center' p={5} borderRadius='50px' >
               <Flex  bg='#F0EFF4ea' _hover={{bg:'white', transition:'300ms'}} boxShadow='xl' alignItems='center' h='180px' p={5} borderRadius='10px'>
                  <Image  maxW='200px'  objectFit='contain' src={"static/img/clientes/blendquimica.png"} alt='Banner inicial' />
               </Flex>
               <Flex bg='#F0EFF4ea' _hover={{bg:'white', transition:'300ms'}} boxShadow='xl' alignItems='center' h='180px' p={5} borderRadius='10px'>
                  <Image  maxW='200px'  objectFit='contain' src={"static/img/clientes/daterra2.png"} alt='Banner inicial' />
               </Flex>
         </HStack> 
         </>
   )
}