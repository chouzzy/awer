import { Box, Button, Collapse, Container, Grid, GridItem, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import { C4_Header, TeamHeader } from "./header";
import Lottie from 'react-lottie'
import animationData from '../../../public/animations/rocket.json';
import animationData2 from '../../../public/animations/telescope.json';
import animationData3 from '../../../public/animations/light.json';
import { Premises } from "./premises";
import { Team } from "./team";

export function Container_5() { 
   const modalDanilo = useDisclosure()
   const modalFenolio = useDisclosure()
   const modalPati= useDisclosure()
   const modalMatheus = useDisclosure()

   
   const team = {
      danilo:{
      description:'Danilo Norcia, graduado em Economia pela Universidade de São Paulo. Possui uma sólida experiência em gestão e desenvolvimento comercial de diversos canais e equipes de vendas. Foi gerente administrativo, financeiro e começou sua trajetória profissional em banco de investimentos. Geriu diretamente equipes que faturavam 25MM por ano.',
      name: 'Danilo Norcia'
      },
      fenolio:{
      description:'Fernando Fenólio, formado em Ciências Contábeis pela Universidade de São Paulo e MBA em Gestão Financeira pela Fundação Getúlio Vargas. Foi responsável pela controladoria e planejamento financeiro nos ramos de indústria química e tecnologia. Experiência em planejamento estratégico e criação de novos negócios.',
      name: 'Fernando Fenólio'
      },
      pati:{
      description: 'Patrícia Costa, Engenheira Civil e apaixonada por tecnologia. Desenvolvedora full-stack web e mobile especialista em ReactJS, NodeJS e React Native.              Grande entusiasta em resolver problemas e facilitar o dia-a-dia das pessoas por meio de sistemas, é responsável pelo desenvolvimento de aplicativos de gestão.',
      name: 'Patricia Costa'
      },
      matheus:{
      description:'Matheus Farias, iniciou sua carreira na área comercial e de planejamento no segmento automotivo. Passou para a área de desenvolvimento de sistemas como especialista em Python. Desde 2021 compõe o time de desenvolvimento da Awer. Formando em Análise e Desenvolvimento de Sistemas pela Faculdade Impacta.',
      name: 'Matheus F. Lopes'
      }

   }

   return (
      <>
         
         <Container id='#quemsomos' maxW='100vw' minH='100vh' bg='gun' p={5} m='0' color='salt' centerContent>
            <C4_Header/>
            <Premises/>
            <TeamHeader/>
            <Grid 
            w={['90vw','90vw','90vw','90vw']}
            py='50px'
            mt={5}
            textAlign='center'
            alignItems='top'
            letterSpacing={2} 
            gap={[4,12,12,0]}
            fontWeight='300'
            templateRows={['repeat(1, 1fr)',
            'repeat(2, 1fr)','repeat(2, 1fr)','repeat(1, 1fr)']}
            templateColumns={['repeat(1, 1fr)',
            'repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']}>

               
               <Team 
               image='static/img/team/danilo.png' 
               description = {team.danilo.description} 
               name = {team.danilo.name}
                modal={modalDanilo} 
               />

               <Team 
               image='static/img/team/fenolio.png' 
               description = {team.fenolio.description} 
               name = {team.fenolio.name} 
               modal={modalFenolio} 
               />

               <Team 
               image='static/img/team/pati.png'
               description = {team.pati.description} 
               name = {team.pati.name} 
               modal={modalPati} 
               />

               <Team 
               image='static/img/team/mathias.png'
               description = {team.matheus.description} 
               name = {team.matheus.name} 
               modal={modalMatheus} 
               />
            </Grid>
         </Container> 
         
      </>
   )}
