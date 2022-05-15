import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Map from "./Map"

import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom"

export default function () {
    const { path } = useRouteMatch()
    return (
        <Box>
            <Switch>
                <Route exact path={path} >
                    <Box>
                        <Typography>Features</Typography>
                    </Box>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cumque quaerat, harum veniam, sint eos molestias quo dolorem, iusto similique eveniet quam incidunt laboriosam dolor ipsa autem sequi assumenda hic.
                    <Map className="smallMap" ></Map>
                </Route>
                <Route exact path={`${path}/Add`} >
                    <Box>
                        <Typography>Features</Typography>
                    </Box>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cumque quaerat, harum veniam, sint eos molestias quo dolorem, iusto similique eveniet quam incidunt laboriosam dolor ipsa autem sequi assumenda hic.
                    <Map className="smallMap" ></Map>
                </Route>
                <Route exact path={`${path}/Explore`}  >
                    <Box>
                        <Typography>Features</Typography>
                    </Box>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cumque quaerat, harum veniam, sint eos molestias quo dolorem, iusto similique eveniet quam incidunt laboriosam dolor ipsa autem sequi assumenda hic.
                    <Map className="smallMap" ></Map>
                </Route>
                <Route exact path={`**`}  >
                    <Box>
                        <Typography>Features</Typography>
                    </Box>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cumque quaerat, harum veniam, sint eos molestias quo dolorem, iusto similique eveniet quam incidunt laboriosam dolor ipsa autem sequi assumenda hic.
                    <Map className="smallMap" ></Map>
                </Route>
            </Switch>
            <Box>

            </Box>
        </Box>
    )
}