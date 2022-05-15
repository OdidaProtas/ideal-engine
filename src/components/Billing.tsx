import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import DenseTable from "./DataTable";

export default function () {
    return (
        <>
            <Typography variant="h5" >Billing</Typography>
            <Box sx={{ my: 2 }} >
                <Paper sx={{ p: 2 }} >
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat iure ullam voluptatum similique illum obcaecati? Asperiores deserunt, ab omnis sint eos commodi consequuntur rem itaque corporis libero quod eveniet.</Typography>
                </Paper>
                <Divider sx={{ my: 2 }} />
                <Grid container  >
                    <Grid item xs >
                        <Paper sx={{ p: 2 }} >
                            <Typography variant="h3"  >0</Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quasi provident accusamus magni aspernatur libero dolor sed quas veritatis soluta. Sed corrupti obcaecati facere iste cumque eaque odio deserunt molestias?
                        </Paper>
                    </Grid>
                    <Grid item xs ></Grid>
                </Grid>
                <Box sx={{ my: 4 }} >
                    <Grid container spacing={2}  >
                        <Grid item xs={7} >
                            <Typography variant="h6"   >Billing history</Typography>
                            <DenseTable />
                        </Grid>
                        <Grid item xs >
                            <Typography variant="h6"   >Invoices</Typography>
                            <DenseTable />
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </>
    )
}