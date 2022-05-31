import { Grid, Heading, Text } from "@chakra-ui/react";

export function C6_Header() { 
   return (
            <Grid w={['80vw','70vw','75vw','75vw']} textAlign='center' py={5} letterSpacing={2}>
                  <Heading size='xl' w={['80vw','70vw','75vw','75vw']} fontWeight='200'>
                     Fale
                     <Text color='salmon' display='inline'> conosco </Text>
                  </Heading>
                  {/* <Text fontWeight='200' py={2} fontSize={['md','md','md','md']} > O quê você esta buscando para o seu negócio? </Text> */}
            </Grid>
   )
}