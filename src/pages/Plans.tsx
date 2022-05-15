import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import { useState } from "react";
interface PlansInterface {
    actions?: boolean
}
export default function Plans({ actions }: PlansInterface) {
    const [state, setState] = useState("basic");
    return (
        <Container sx={{ mb: 9 }} >
            <Box sx={{ textAlign: "center", my: 3 }} >
                {/* <Typography variant="h4" >{actions ? "Select a" : ""} plan</Typography> */}
            </Box>
            <Grid container spacing={2}  >
                <Grid item xs >
                    <Paper sx={{ p: 2 }} >
                        <Typography variant="h5" sx={{ mb: 2 }} >Tiny</Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur, quis ratione unde fugit id sit reprehenderit? Deleniti sed fugit totam, distinctio quam, vel minus voluptas, unde recusandae numquam iure!
                        <Box sx={{ my: 2 }} >
                            <Typography variant="h4"  >Ksh. 0</Typography>
                            <Typography>Free 500 requests per month</Typography>
                        </Box>

                        <Box sx={{ textAlign: "center", my: 2 }}  >
                            {actions && (
                                <Button onClick={() => setState("basic")} color={state === "basic" ? "success" : "primary"} disableElevation variant="contained" >{state === "basic" ? "Selected" : "Select"}</Button>
                            )}
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper sx={{ p: 2 }} >
                        <Typography variant="h5" sx={{ mb: 2 }} >Lite</Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur, quis ratione unde fugit id sit reprehenderit? Deleniti sed fugit totam, distinctio quam, vel minus voluptas, unde recusandae numquam iure!
                        <Box sx={{ my: 2 }} >
                            <Typography variant="h4"  >Ksh. 0</Typography>
                            <Typography>Free 1200 requests per month</Typography>
                        </Box>
                        <Box sx={{ textAlign: "center", my: 2 }}  >
                            {actions && (
                                <Button onClick={() => setState("lite")} color={state === "lite" ? "success" : "primary"} disableElevation variant="contained" >{state === "lite" ? "Selected" : "Select"}</Button>
                            )}
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper sx={{ p: 2 }} >
                        <Typography variant="h5" sx={{ mb: 2 }} >Enterprise</Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur, quis ratione unde fugit id sit reprehenderit? Deleniti sed fugit totam, distinctio quam, vel minus voluptas, unde recusandae numquam iure!
                        <Box sx={{ my: 2 }} >
                            <Typography variant="h4"  >Ksh. 0</Typography>
                            <Typography>Free 2000 requests per month</Typography>

                        </Box>
                        <Box sx={{ textAlign: "center", my: 2 }}  >
                            {actions && (
                                <Button onClick={() => setState("enterprise")} color={state === "enterprise" ? "success" : "primary"} disableElevation variant="contained" >{state === "enterprise" ? "Selected" : "Select"}</Button>
                            )}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}