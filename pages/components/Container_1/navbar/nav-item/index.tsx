import { Box } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'

export function NavItem(NavItemContent) { 
   
   return (
      <Slink
        to={NavItemContent.to}
        spy={NavItemContent.spy}
        smooth={NavItemContent.smooth}
        offset={NavItemContent.offset}
        duration={NavItemContent.duration}
      >
         <Box
           cursor={NavItemContent.cursor}
           _hover={NavItemContent._hover}
           onClick={NavItemContent.onClick}
           textTransform={NavItemContent.textTransform}>
           {NavItemContent.content}
         </Box>

      </Slink>
   )
}