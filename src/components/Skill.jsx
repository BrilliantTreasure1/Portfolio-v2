import { Divider,Chip , Box ,Typography ,LinearProgress } from "@mui/material"
import { purple } from "@mui/material/colors";

const Skill = ({ icon , color ,name ,value }) => {

    return(
        <>
            <Divider textAlign="right" sx={{
                "&::before, &::after" : {
                    borderColor:`${color}.main`
                },mt:1
            }}>
                <Chip icon={
                    <Box 
                    component="img"
                    src={icon}
                    sx={{height: 17}} />
                } color={color} label={name} sx={{color:"#000", p: 3}}>
                    
                </Chip>
            </Divider>
            <Box sx={{display: "flex" ,alignItems:"center"}}>
                <Box sx={{minWidth: 35}}>
                    <Typography variant="body2" color={purple}>
                        {value}
                    </Typography>
                </Box>
                <Box 
                    sx={{width:"100%" , mr: 1}}>
                    <LinearProgress 
                    variant="determinate"
                    value={value}
                    color={color}
                    sx={{height: 10, borderRadius:2}}
                 />
                </Box>
            </Box>
        </>
    )
}

export default Skill;