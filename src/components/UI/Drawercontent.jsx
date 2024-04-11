import { Box, Divider } from "@mui/material"


import SidebarHeader from "../Sidebar/SidebarHeader"
import SidebarFooter from "../Sidebar/SidebarFooter"
import SidebarTab from "../Sidebar/SidebarTab"


const DrawerContent = ({value , handleChange  , handleDrawer, handleThemeChange}) =>{ 

 

    return(
             
        <Box 
        sx={{
            justifyContent: "center",
            textAlign: "center",
            fontFamily : "vazir",
            textcolor : "whitesmoke"
        }}>
            {/* SidebarHeader */}
            <SidebarHeader handleThemeChange={handleThemeChange} />  


                <Divider variant="middle" sx={{mt:2 , color: "whitesmoke"}}/>
            
                    {/* TAB & TABs */}
                    <SidebarTab value={value} handleChange={handleChange} handleDrawer={handleDrawer} />
          
                <Divider variant="middle" sx={{mt : 2}} />

            {/* SidebarFooter */}    
            <SidebarFooter />

        </Box>
            
    )
}

export default DrawerContent;