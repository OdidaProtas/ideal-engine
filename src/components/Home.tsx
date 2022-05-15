import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Plans from "../pages/Plans";
import Divider from "@mui/material/Divider"
import { useHistory } from "react-router-dom";
export default function Home() {

  const { push } = useHistory()

  return (
    <div>
      <AppBar elevation={0} color="secondary" >
        <Toolbar>
          <Box sx={{ flexGrow: "1" }} >
            <Typography>
              GIS.KE API
            </Typography>
          </Box>
          <Typography onClick={() => push("/Auth")} >Login</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box sx={{ my: 12 }} >
          <Typography variant="h5" sx={{ mb: 2 }} >Spatial APIs</Typography>
          <Typography>A map, it is said represents an area</Typography>
          <Divider sx={{ my: 2 }} />
        </Box>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error vero perferendis officia possimus distinctio voluptas, ea laborum necessitatibus tempora reprehenderit deserunt saepe! Doloribus ea debitis illo libero repudiandae asperiores!
      </Container>
      <Plans />
    </div >
  );
}
