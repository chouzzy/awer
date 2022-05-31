import { Button, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ScrollContainer, ScrollPage, Animator, batch, Sticky, MoveOut, Fade } from "react-scroll-motion";

export function HomeContent() { 
   const [isBrowser, setIsBrowser] = useState(false);
   useEffect(() => {
     setIsBrowser(typeof window !== undefined ? true : false);
   }, []);
   return (
      <Grid w={['80vw','70vw','75vw','75vw']} h='100vh' textAlign='center' my='auto' color='salt' letterSpacing={2}>
         {isBrowser && (
         <ScrollContainer snap="none">
            <ScrollPage page={0}>
               <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -450))}>
                  <Heading size='2xl' w={['80vw','70vw','75vw','75vw']} fontWeight='200'>
                     Acessoria de 
                     <Text color='salmon' display='inline'> gestão </Text>
                     e soluções 
                     <Text color='salmon' display='inline'> tecnológicas </Text>
                  </Heading>
                  <Text fontWeight='200' py={2} fontSize={['xl','lg','xl','2xl']}> Conectamos você para a geração de melhores resultados</Text>
                  {/* <Text fontWeight='200' py={2} fontSize={['xl','lg','xl','2xl']}> Conexões eficientes de forma simples e prática</Text> */}
                  <Button
                  bg='#f55e5e9b'
                  w={['','sm','sm','sm']}
                  mx='auto'
                  borderRadius={50}
                  fontWeight='400'
                  _hover={{bg: "cyan", color:'salt', borderRadius:'5',border:'1px solid white' , transition:'500ms'}}
                  mt='20px'
                  textTransform='uppercase'
                  >Fale com um consultor
                  </Button>
               </Animator>
            </ScrollPage>
            <></>
         </ScrollContainer>
         )}
      </Grid>
   )}
