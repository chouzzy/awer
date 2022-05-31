import { Grid, Heading, Text } from "@chakra-ui/react";

export function C4_Header() { 
   return (
            <Grid w={['80vw','70vw','75vw','75vw']} textAlign='center' py={5} letterSpacing={2}>
                  <Heading size='xl' w={['80vw','70vw','75vw','75vw']} fontWeight='200'>
                     Nós somos a
                     <Text color='salmon' display='inline'> awer.co </Text>
                  </Heading>
                  {/* <Text fontWeight='200' py={2} fontSize={['md','md','md','md']} > O quê você esta buscando para o seu negócio? </Text> */}
            </Grid>
   )
}
export function TeamHeader() { 
   return (
            <Grid w={['80vw','70vw','75vw','75vw']} textAlign='center' py={5} letterSpacing={2}>
                  <Heading size='xl' w={['80vw','70vw','75vw','75vw']} fontWeight='200'>
                     Conheça nosso
                     <Text color='salmon' display='inline'> time </Text>
                  </Heading>
                  {/* <Text fontWeight='200' py={2} fontSize={['md','md','md','md']} > O quê você esta buscando para o seu negócio? </Text> */}
            </Grid>
   )
}