import { Box } from '@mui/material';


const Home = () => {

    return(
        <>
         <Box
        sx={{ 
        backgroundImage: {
        lg:`url(${require("../../../src/assets/ph1.png")})` ,
        xl:`url(${require("../../../src/assets/ph1.png")})` ,
        md:`url(${require("../../../src/assets/ph1.png")})`,
        sm:`url(${require("../../../src/assets/ph1.png")})` ,
        xs:`url(${require("../../../src/assets/1.jpg")})`},  
        backgroundPosition: "center",  
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        height:{
            xl: "100vh",
            lg: "100vh",
            md: "100vh",
            sm: "100vh",
            xs: "100vh",
        }  ,
        backgroundColor:"black"
        }}>
            
      </Box>
        </>
       
    )
}

export default Home;