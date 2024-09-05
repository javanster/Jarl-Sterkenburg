import { Box, Typography } from "@mui/material";
import { colorPalette } from "../utils/colors";

export const IntroCard = () => {
    return (
        <Box sx={{ width: "50%", mt: -12 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <img height={"200px"} src="jarlSterkenburg.jpeg" alt="Jarl Sterkenburg" />
                <Typography
                    variant="h2"
                    sx={{ px: 6, color: colorPalette.primary, fontWeight: 500 }}
                >
                    Jarl Sterkenburg
                </Typography>
            </Box>
        </Box>
    );
};
