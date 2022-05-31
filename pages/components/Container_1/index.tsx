import { Box, chakra, Container, Image } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import { HomeContent } from "./homeContent";
import { Navbar } from "./navbar";


export function Container_1() { 
   return (
      <>
         
         <Container
           maxW='100vw'
           minH='100vh'
           bgImage={["static/img/sunset-guy-sm.png","static/img/sunset-guy-md.png","static/img/sunset-guy-md.png","static/img/sunset-guy.png"]}
           bgRepeat='no-repeat'
           bgSize='cover'
           p='0'
           m='0'
           centerContent
         >
            <Navbar/>
            <HomeContent/>
         </Container> 
      </>
   )
}