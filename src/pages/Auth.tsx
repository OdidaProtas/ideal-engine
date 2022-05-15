import Box from "@mui/material/Box";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import Login from "../components/Login";

import Typography from "@mui/material/Typography";

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"


export default function () {
    const { path, } = useRouteMatch()
    const { push } = useHistory()
    return (
        <Box>
            <AppBar color="secondary" elevation={0}  >
                <Toolbar >
                    <Box sx={{ flexGrow: "1" }} >
                        <Typography onClick={() => push("/")}  >GIS-KE.API</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path={`${path}`} >
                    <Login />
                </Route>
                <Route exact path={`${path}/Signup`} >
                    <Login signup />
                </Route>
                <Route exact path={`${path}/Reset_Pass`} >
                    <Login reset />
                </Route>
                <Route exact path={"**"} >
                    <Login />
                </Route>
            </Switch>
        </Box>
    )
}