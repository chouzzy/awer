import { Box, chakra, Container, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import {link as Slink} from "react-scroll"

export function C2_Header() { 
   return (
            <Grid w={['80vw','70vw','75vw','75vw']} textAlign='center' py={5} letterSpacing={2}>
                  <Heading size='xl' w={['80vw','70vw','75vw','75vw']} fontWeight='200'>
                     Conheça nossas
                     <Text color='salmon' display='inline'> soluções </Text>
                  </Heading>
                  <Text fontWeight='200' py={2} fontSize={['md','md','md','md']} > O quê você esta buscando para o seu negócio? </Text>
            </Grid>
   )
}