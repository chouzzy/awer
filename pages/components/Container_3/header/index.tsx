import { Box, chakra, Container, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import {link as Slink} from "react-scroll"

export function C3_Header() { 
   return (
            <Grid w={['80vw','70vw','75vw','75vw']} textAlign='center' mt={5} py={5} letterSpacing={2}>
                  <Heading size='xl' w={['80vw','70vw','75vw','75vw']} fontWeight='200'>
                     Nossos
                     <Text color='salmon' display='inline'> clientes </Text>
                  </Heading>
                  <Text fontWeight='200' py={2} fontSize={['md','md','md','md']}>
                  Faça como nossos parceiros e avance para o próximo nível!
                  </Text>
            </Grid>
   )
}