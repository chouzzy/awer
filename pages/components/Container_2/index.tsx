import { Box, chakra, Container, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import {link as Slink} from "react-scroll"
import { RiComputerFill, RiComputerLine, RiPercentLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { MdMobileScreenShare, MdAttachMoney, MdComputer, MdPointOfSale } from "react-icons/md";
import { GiRobotGolem, GiMoneyStack, GiGears, GiRocketThruster, GiRocketFlight } from "react-icons/gi";
import { SiAtom } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";
import { GoLaw } from "react-icons/go";

import { C2_Header } from "./header";
import { ServiceItem } from "./serviceItem";
import { BsGear } from "react-icons/bs";

export function Container_2() { 

   const texto = {
      websites: {
         title:'Criação de Websites',
         description:'Nós utilizamos o famoso Framework Next JS juntamente com a linguagem de programação Javascript. Garantindo assim mais qualidade e flexibilidade para inovações.'
      },
      system: {
         title:'Sistema de gestão',
         description:'Implantar um Sistema de Gestão na organização, significa favorecer o alcance de seus objetivos com eficácia e eficiência.'
      },
      app: {
         title:'Aplicativo de pedidos',
         description:'‍Pedidos organizados por status para que sua equipe fique em sintonia e seus clientes sejam informados sobre todo o processo.'
      },
      bots: {
         title:'Criação de bots',
         description:'Com RPA, os usuários de software criam robôs de software, ou “bots”, que podem aprender, simular e executar processos de negócios baseados em regras. A automação RPA permite que os usuários criem bots observando as ações digitais humanas.'
      },
      bases: {
         title:'Criação de base de clientes',
         description:'Utilizamos Python para a criação de bases de clientes separados por segmentos.'
      },
      murdock: {
         title:'Pesquisa de processos jurídicos',
         description:'Utilizamos Python para a criação de sistemas de filtragens para encontrar o melhor processo para a sua empresa de advocacia'
      },
      sales: {
         title:'Expansão comercial',
         description:'Temos o conhecimento necessário para decolar as vendas de seu negócio, de forma prática e inteligente'
      },
      finances: {
         title:'Gestão Financeira',
         description:'Seu negócio saudável e controlado "na vírgula"'
      },
      adm: {
         title:'Evolução operacional e administrativa',
         description:'Otimize e automatize. Temos o necessário para seu negócio fazer muito mais com muito menos!'
      },
   }

   return (
      <>
         
         <Container id='#Home' maxW='100vw' minH='100vh' bg='gun' p={5} m='0' color='salt' centerContent>
            <C2_Header/>

            <Grid 
            w={['90vw','90vw','90vw','90vw']}
            py={5}
            mt={5}
            textAlign='center' 
            letterSpacing={2} 
            templateRows='repeat(3, 1fr)'
            templateColumns={['repeat(1, 1fr)',
            'repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)']}>
             
               <ServiceItem icon={<MdComputer/>} description={texto.websites.description} title={texto.websites.title}/>
               <ServiceItem icon={<SiAtom/>} description={texto.system.description} title={texto.system.title}/>
               <ServiceItem icon={<MdMobileScreenShare/>} description={texto.app.description} title={texto.app.title}/>
               <ServiceItem icon={<GiRobotGolem/>} description={texto.bots.description} title={texto.bots.title}/>
               <ServiceItem icon={<GiMoneyStack/>} description={texto.bases.description} title={texto.bases.title}/>
               <ServiceItem icon={<GoLaw/>} description={texto.murdock.description} title={texto.murdock.title}/>
               <ServiceItem icon={<IoRocketOutline/>} description={texto.sales.description} title={texto.sales.title}/>
               <ServiceItem icon={<RiPercentLine/>} description={texto.finances.description} title={texto.finances.title}/>
               <ServiceItem icon={<BsGear/>} description={texto.adm.description} title={texto.adm.title}/>
            </Grid>
         </Container> 
         
      </>
   )
}