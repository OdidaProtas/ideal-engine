import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button"

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Apps";
import AcualHome from "@mui/icons-material/Home"
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link"
import Nav from "./Nav";

import { useHistory } from "react-router-dom"

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: any;
}

export default function DrawerComponent(props: Props) {
  const { window, children } = props;
  const { push } = useHistory()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar >
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-evenly" }} >
          <IconButton onClick={() => push("/")}  >
            <AcualHome />
          </IconButton>
          <Typography onClick={() => push("/")} variant="h6"  >
            GIS.Ke API
          </Typography>

        </Box>

      </Toolbar>
      <Divider />
      <Nav />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        color="inherit"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: "1", display: "flex" }} >
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => push("/dashboard")}
              >
                <HomeIcon />
              </IconButton>
            </Box>
            <Box sx={{ mt: .5 }}  >
              <Typography onClick={() => push("/dashboard")} variant="h6" noWrap component="div">
                Dashboard
              </Typography>
            </Box>

          </Box>
          <Box>
            <Button color="secondary" onClick={() => push("/Auth")} >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Link>/dashboard/</Link>
        <Divider />
        {children}
      </Box>
    </Box>
  );
}
