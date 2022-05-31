import { Box, chakra, Container, Flex, Grid, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import { GiRobotGolem, GiMoneyStack } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { MdComputer, MdMobileScreenShare } from "react-icons/md";
import { SiAtom } from "react-icons/si";
import { C3_Header } from "../Container_3/header";
import { ServiceItem } from "../Container_2/serviceItem";
import { PartnersLg } from "./partners-lg";
import { PartnersMd } from "./partners-md";
import { PartnersSm } from "./partners-sm";

export function Container_3() { 

   const isMobileVersion = useBreakpointValue( { 
      base:true,
      sm: true,
      md:false,
      lg:false,
      xl:false,
    } )
   const isDesktopVersion = useBreakpointValue( { 
      base:true,
      sm: false,
      md:false,
      lg:true,
      xl:true,
    } )

   const isTabletVersion = useBreakpointValue( { 
      base: true,
      sm: false,
      md:true,
      lg:false,
      xl:false,
    } )

   return (

   <Container
   id='#clientes'
   maxW='100vw'
   minH='100vh'
   bgImage={["static/img/costumer-sm.png","static/img/costumer-sm.png","static/img/costumer-md.png","static/img/handshake-cut.png"]}
   bgRepeat='no-repeat'
   bgSize='cover'
   bgColor='gun'
   p={5}
   color='salt'
   centerContent
   >
      <C3_Header/>

      <Grid
      w={['100vw','100vw','100vw','95vw']}
      p={5}
      h={['100vh','64vh','72vh','100%']}
      alignItems='center'
      my='auto'
      textAlign='center'
      letterSpacing={2} 
      gap={[4,4,2, 2,16]}
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>
         
        <PartnersLg/>
      </Grid>
   </Container> 
   )
}