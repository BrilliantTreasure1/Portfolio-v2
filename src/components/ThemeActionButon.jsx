import { useTheme } from "@mui/material/styles";
import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

const ThemeActionButton = ({handleThemeChange}) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: "absolute",
                display: {
                    xs: "none",
                    md: "block",
                },
            }}
        >
            <Fab
                aria-label="ThemeChanger"
                variant="extended"
                size="small"
                color="secondary"
                onClick={handleThemeChange}
                sx={{ ml: 2, color: "whitesmoke" }}
            >
                {theme.palette.mode === "dark" ? (
                    <NightlightOutlined sx={{ mr: 1 }} />
                ) : (
                    <WbSunnyOutlined sx={{ mr: 1 }} />
                )}
                {theme.palette.mode === "dark" ? "تم شب" : " تم روز"}
            </Fab>
        </Box>
    );
};

export default ThemeActionButton;
