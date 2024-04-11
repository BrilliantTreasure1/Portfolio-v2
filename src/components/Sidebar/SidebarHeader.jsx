import { Typography ,Avatar, Box, IconButton } from "@mui/material"
import {GitHub,Telegram,Instagram} from "@mui/icons-material"
import ThemeActionButton from "../ThemeActionButon"


const SidebarHeader = ({handleThemeChange}) => {

    return (
        <>
        <Avatar
        src=""
        sx={{height : 100 , width:100, margin: "0 auto", display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none"
        }}}
        >
      </Avatar>

   
    <Typography variant="h8" sx={{color: "whitesmoke"}}>
                ابوالفضل گنج تابش
    </Typography>
    <br/>
    <Typography variant="h8" sx={{color: "whitesmoke"}}>
                برنامه نویس و توسعه دهنده وب
    </Typography>

    <Box component="div" sx={{m: "0 auto" , textAlign:"center"}}>
        <IconButton aria-label="Github">
            <a href="https://github.com/BrilliantTreasure1" target="_blank" rel="noopener noreferrer">
                <GitHub sx={{ color:"gray" }} />
            </a>
        </IconButton>
        <IconButton aria-label="Instagram">
            <a href="https://www.instagram.com/imabrilliant_gt" target="_blank" rel="noopener noreferrer">
                <Instagram sx={{ color:"gray" }} />
            </a>
        </IconButton>
        <IconButton aria-label="Telegram">
            <a href="" target="_blank" rel="noopener noreferrer">
                <Telegram sx={{ color:"gray" }} />
            </a>
        </IconButton>
        <ThemeActionButton handleThemeChange={handleThemeChange}/>
    </Box>
    </>
    )
}

export default SidebarHeader;