import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import VerifyDialog from "../components/VerifyDialog";
export default function () {
    return (
        <Box>
            <Box sx={{ my: 3 }}  >
                <Typography variant="h5" >Checkout</Typography>
            </Box>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis optio architecto rerum perspiciatis fugiat cupiditate. Voluptates a officia voluptatem pariatur facilis ab ducimus sunt fugiat, earum numquam nam perferendis quasi.

            <Box sx={{ mt: 3 }}  >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium atque commodi corporis qui numquam nam nesciunt sit consequatur! Minus modi expedita minima molestias laudantium? Numquam eius atque quaerat libero alias?
            </Box>

            <Box>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2} mb={9} >
                    <Grid item xs >
                        <Paper sx={{ p: 2 }}  >
                            <Typography variant="h6" >Mpesa Subscription</Typography>
                            <Typography sx={{ mt: 2 }} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis corporis reprehenderit asperiores nostrum architecto accusamus suscipit ipsa officia. Dolorem itaque esse facilis distinctio culpa veritatis aspernatur soluta blanditiis tempore.</Typography>

                            <Box sx={{ my: 2, p: 2 }}  >
                                <TextField fullWidth label="Phone number" sx={{ my: 2 }} />
                                <VerifyDialog />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs >
                        <Paper sx={{ p: 2, height: "100%" }} >
                            <Typography variant="h6" sx={{ mb: 2 }} >Subscribe with PayPal / Credit card</Typography>
                            <Box sx={{ height: "70%", border: "1px solid lightgray", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                Paypal widget
                            </Box>
                        </Paper>

                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}