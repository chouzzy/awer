import { Box, Button, Collapse, Container, Grid, GridItem, HStack, Image, ScaleFade, SlideFade, Text, useDisclosure } from "@chakra-ui/react";

export function Team(teamProps) { 
   return (
      <>
         <Grid templateRows='repeat(1, 1fr)'>

            <GridItem>
               <Image w='160px' my={5} borderRadius='100%'  mx='auto'  src={teamProps.image}/>
               <Button bg='salmon' _hover={{bg:'cyan'}} onClick={teamProps.modal.onToggle}>
                  {teamProps.name}
               </Button>

            </GridItem>

            <Collapse in={teamProps.modal.isOpen}  >
               <Box
                  color='white'
                  bg='wine'
                  rounded='md'
                  shadow='md'
                  w='95%'
                  mt={8}
               >
                  <Text fontSize='0.8rem'  p={5} color='salt' textAlign='center'>
                  {teamProps.description}
                  </Text>
               </Box>
            </Collapse >
         </Grid>
      </>
   )
}