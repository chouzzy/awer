import { Container, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import Lottie from 'react-lottie'
import animationData from '../../../../public/animations/rocket.json';
import animationData2 from '../../../../public/animations/telescope.json';
import animationData3 from '../../../../public/animations/light.json';

export function Premises() { 

   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
   const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: animationData2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
   const defaultOptions3 = {
      loop: true,
      autoplay: true,
      animationData: animationData3,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
   
   const premissas = {
      mission:'Conectar nossos clientes à novas oportunidades, com boas práticas de gestão, tecnologia e planejamento para otimização de processos e geração de melhores resultados',
      vision:'Estarmos consolidados, em 2024, como uma consultoria de gestão e expansão de negócios com soluções tecnológicas que impulsionam a eficiência operacional',
      values: 'Respeito, Conexões, Simplicidade e Praticidade, Inovação e Pesquisa, Ser Awer.'
   }

   return (
            <Grid 
            w={['90vw','90vw','90vw','90vw']}
            py='50px'
            mt={5}
            textAlign='center'
            alignItems='center'
            letterSpacing={2} 
            fontWeight='300'
            templateRows={['repeat(3, 1fr)',
            'repeat(3, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)']}
            templateColumns={['repeat(1, 1fr)',
            'repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']}>

                  <GridItem>
                     <Lottie 
                        options={defaultOptions}
                        height={160}
                        width={160}
                     />
                     <Text fontSize='1.5rem'  color='salmon'>Missão
                     </Text>
                     <Text fontSize='1rem' color='salt'>{premissas.mission}</Text>
                  </GridItem>

                  <GridItem>
                     <Lottie 
                     options={defaultOptions2}
                     height={160}
                     width={160}
                  />
                     <Text fontSize='1.5rem'  color='salmon'>Visão
                     </Text>
                        <Text fontSize='1rem' color='salt'>{premissas.vision}</Text>
                  </GridItem>

                  <GridItem>
                     <Lottie 
                     options={defaultOptions3}
                     height={160}
                     width={160}
                  />
                     <Text fontSize='1.5rem'  color='salmon'>Valores
                     </Text>
                        <Text fontSize='1rem' h='120px' color='salt'>{premissas.values}</Text>
                  </GridItem>
                 
            </Grid>
   )
}