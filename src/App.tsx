import { Box, Stack, Typography } from "@mui/material";
import { colorPalette } from "./utils/colors";
import { Header } from "./components/TopBar";
import { IntroCard } from "./components/IntroCard";

function App() {
    return (
        <Box sx={{ height: "150vh", width: "100%", backgroundColor: colorPalette.background }}>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    color: colorPalette.text,
                }}
            >
                <IntroCard />
                <Stack spacing={4} sx={{ width: "50%", mt: 6 }}>
                    <Typography variant="body2" sx={{ fontWeight: "light" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt
                        tortor sodales erat vestibulum maximus. Nam nec tempus ipsum, a interdum
                        sapien. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Ut in maximus dolor. In tristique eleifend erat,
                        quis facilisis libero varius vulputate. Praesent sed metus congue, feugiat
                        risus eu, varius purus. Proin mollis nulla vel viverra auctor. Donec
                        porttitor condimentum nisi, nec cursus sem porttitor ornare. Donec ex elit,
                        commodo in luctus et, imperdiet a ex. Mauris hendrerit mattis nunc ut
                        hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "light" }}>
                        Cras vulputate sagittis odio, et egestas odio interdum auctor. Maecenas et
                        tellus sed felis pharetra posuere vitae eget turpis. Integer consectetur
                        nibh quis risus rutrum convallis. Praesent lacus dolor, maximus quis purus
                        porta, condimentum ornare est. Curabitur nisl nisi, varius a ornare nec,
                        blandit at neque. Nullam sagittis facilisis consequat. Curabitur convallis
                        orci vitae nibh pellentesque commodo. Vestibulum sit amet sem a elit pretium
                        lobortis. Maecenas molestie blandit sem eget posuere. Praesent vel risus
                        sollicitudin, ornare odio et, ornare nulla. Aliquam risus massa, consequat
                        non pellentesque vitae, eleifend a purus. Ut orci quam, blandit at blandit
                        non, scelerisque eu nunc. Praesent malesuada interdum mi eget faucibus. In
                        sed egestas mauris, auctor lobortis urna.
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}

export default App;
