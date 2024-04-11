import {Fab ,Box } from "@mui/material"
import { MenuRounded   } from "@mui/icons-material"
import { grey } from "@mui/material/colors"



const FloatActionButton = ({handleDrawer}) => {

    return(
        <Box
        sx={{
            position:"absolute",
            display:{
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none"
            }
        }}>
            <Fab aria-label="sidebar" size="small" sx={{m :2 , backgroundColor: grey[800]}} onClick={handleDrawer}>
                <MenuRounded/>
            </Fab>
        </Box>
    )
}

export default FloatActionButton