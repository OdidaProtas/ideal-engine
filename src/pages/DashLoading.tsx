import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import AppTable from "./AppTable";

export default function DashLoading() {
    const { push } = useHistory()
    return (
        <div>
            <Grid container mt={2} spacing={2} alignItems="center" >
                <Grid item xs={6} >
                    <Paper sx={{ p: 2 }}  >
                        <Box>
                            <Box sx={{ mb: 2 }}  >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quasi ad placeat voluptatum esse perferendis, perspiciatis sequi maxime fuga voluptate obcaecati? Dolorum neque impedit quas mollitia illum, facilis veritatis quia.
                            </Box>
                            <Button variant="contained" disableElevation color="secondary" onClick={() => push("/dashboard/APPS/new")} >Create New APP</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper sx={{ p: 2 }}  >
                        <Box>
                            <Box sx={{ mb: 2 }}  >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quasi ad placeat voluptatum esse perferendis, perspiciatis sequi maxime fuga voluptate obcaecati? Dolorum neque impedit quas mollitia illum, facilis veritatis quia.
                            </Box>
                            <Button variant="contained" disableElevation color="secondary" onClick={() => push("/dashboard/Billing")} >Billing</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Box>
                <Typography sx={{ my: 4 }} >Your Apps</Typography>
                <AppTable />
            </Box>
        </div>
    )
}