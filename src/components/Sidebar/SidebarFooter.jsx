import { Typography , Box } from "@mui/material"
import { CopyrightRounded,} from "@mui/icons-material"


const SidebarFooter = () => {

    return (
        <Box 
        sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignContent: "center",
        height: 100,
     }}
     > 
    <Typography variant="subtitle2" color="whitesmoke">
        طراحی شده توسطه {""}
        BrilliantTreasure
    </Typography>

    <Typography variant="caption" color="whitesmoke">
        copy right 2023
        <CopyrightRounded sx={{verticalAlign : "middle" , height: 16}}/>
    </Typography>
    
</Box>
    )
}

export default SidebarFooter;