import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
import Link from "@mui/material/Link"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
import Grid from "@mui/material/Grid"
export default function () {
    const { ctx } = useParams() as any;
    return (
        <>
            <Typography variant="h5" sx={{ my: 2 }} >{ctx}</Typography>
            <Box sx={{ my: 2 }} >
            </Box>
            <Box sx={{ my: 2 }}>
                <Paper sx={{ p: 2 }}  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eveniet quod distinctio, nemo officia impedit placeat cumque maiores ratione aliquid recusandae adipisci illo dicta cum rerum inventore libero incidunt velit!
                </Paper>
            </Box>
            <Box>
                <Typography variant="h6"  >Leaflet</Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2} mb={2} mt={2} >
                    <Grid item xs >
                        <Paper sx={{ p: 2 }} >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione rerum odio, nihil suscipit deleniti consectetur id eligendi ex voluptates dolores sint doloribus placeat nisi eos commodi perferendis itaque dolorem eveniet.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, ab iste repellendus accusamus nostrum tenetur cum quam. Corporis ab deleniti amet reprehenderit doloribus. Repellat voluptas, delectus odit error deserunt ipsum?
                            <br />
                            br
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere maxime aliquam dicta dignissimos, repellat deserunt optio rem, alias ut sapiente quisquam quis ratione fugit numquam error earum ipsum tenetur.

                        </Paper>


                    </Grid>
                    <Grid item xs  >
                        <Paper sx={{ height: "100%", p: 2 }} >
                            <Box sx={{ height: "100%", width: "100%", border: "1px solid lightgray", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                Codesandbox
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                <Typography variant="h6"  >Leaflet</Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2} mb={2} mt={2} >
                    <Grid item xs >
                        <Paper sx={{ p: 2 }}  >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione rerum odio, nihil suscipit deleniti consectetur id eligendi ex voluptates dolores sint doloribus placeat nisi eos commodi perferendis itaque dolorem eveniet.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, ab iste repellendus accusamus nostrum tenetur cum quam. Corporis ab deleniti amet reprehenderit doloribus. Repellat voluptas, delectus odit error deserunt ipsum?
                            <br />
                            br
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere maxime aliquam dicta dignissimos, repellat deserunt optio rem, alias ut sapiente quisquam quis ratione fugit numquam error earum ipsum tenetur.
                        </Paper>

                    </Grid>
                    <Grid item xs  >
                        <Paper sx={{ height: "100%", p: 2 }} >
                            <Box sx={{ height: "100%", width: "100%", border: "1px solid lightgray", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                Codesandbox
                            </Box>
                        </Paper>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}