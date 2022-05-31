import { Box, chakra, Container, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import { RiComputerFill } from "react-icons/ri";
import {link as Slink} from "react-scroll"

export function ServiceItem(content) { 
   return (
      <>
         <GridItem textAlign='center' fontWeight='300' h='300px' p={5}>

            <Flex cursor='pointer' 
            fontSize='6rem' 
            textAlign='center' 
            maxW='6rem' 
            color='salmon' 
            mx='auto'
            my={5}
            _hover={{color: "salt", transform: 'rotate(360deg) scale(1.2)', transition:'1000ms', py:'15px'}}>
               {content.icon}
            
            </Flex>
            <Heading size='md' textTransform='uppercase' fontWeight='300'>
               {content.title}
            </Heading>
            <Text fontSize='0.75rem'>
               {content.description}
            </Text>
            
         </GridItem>
      </>
   )
}