import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Map from "./Map"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import UploadDialog from "./UploadDialog"

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
                    <Grid container spacing={2} mt={2} >
                        <Grid item xs >

                            <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                                <Typography>Features</Typography>
                                <UploadDialog />
                            </Box>
                            <Stack spacing={2}  >
                                <TextField fullWidth label="Name" ></TextField>
                                <TextField fullWidth label="Desc" ></TextField>
                                <TextField fullWidth label="Lat" ></TextField>
                                <TextField fullWidth label="Lng" ></TextField>
                                <Button disableElevation color="secondary" variant="contained" >Save</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs >
                            <Map className="smallMap" ></Map>
                        </Grid>
                    </Grid>

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