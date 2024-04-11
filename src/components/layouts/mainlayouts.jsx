import { ThemeProvider,createTheme } from "@mui/material/styles"
import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from "@emotion/react"
import { HelmetProvider,Helmet } from "react-helmet-async"
import createcache from "@emotion/cache"
import { prefixer } from "stylis"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

//NOTE create custom theme
const LightTheme = createTheme({
    direction : "rtl",
    palette:{
      mode:"light"
    },
    typography : {
      fontFamily : 'vazir'
    }
  })

  const DarkTheme = createTheme({
    direction : "rtl",
    palette:{
      mode:"dark"
    },
    typography : {
      fontFamily : 'vazir'
    }
  })

//NOTE create rtl cache
const cacheRTL = createcache({
    key :"muirtl"
    ,stylisPlugins: [prefixer,rtlPlugin]
  })


const MainLayouts = ({ children,mode }) => {

  const theme = mode === "dark" ? DarkTheme : LightTheme; 
    return (
        <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              <title>BrilliantTreasur</title>
            </Helmet>
          </HelmetProvider>

          {/* Grid system */}
          <Grid2 container sx={{height:"100vh"}}>
              {children}

          </Grid2>
    
      </ThemeProvider>
      </CacheProvider>
      
    )
}

export default MainLayouts;