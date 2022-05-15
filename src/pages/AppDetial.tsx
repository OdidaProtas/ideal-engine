import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings"


import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";

export default function AppDetail() {

    return (
        <>
            <Box>
                <Paper sx={{ p: 2, mt: 2 }}  >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                        <Box>
                            <Typography>Name: Name-app</Typography>
                            <Typography>Lorem ispum sit dolor</Typography>
                        </Box>

                        <Box>
                            <IconButton>
                                <SettingsIcon />
                            </IconButton>
                        </Box>

                    </Box>
                    <Divider sx={{ my: 2 }} />
                </Paper>
                <Box sx={{ mt: 2 }} >
                    <Grid container spacing={2}  >
                        <Grid item xs >
                            <Paper sx={{ p: 2 }} >
                                Security
                                <Box>
                                    <Typography variant="caption" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem repellat sint atque, dolor deleniti earum at ex, quas rerum distinctio alias quidem quod? In amet esse perspiciatis necessitatibus? Maiores!
                                    </Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <Typography>API Keys</Typography>
                                    <Typography variant="caption" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem repellat sint atque, dolor deleniti earum at ex, quas rerum distinctio alias quidem quod? In amet esse perspiciatis necessitatibus? Maiores!
                                    </Typography>
                                    <Accordion>
                                        <AccordionSummary>
                                            Reveal API Keys
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            1234567890
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs  >
                            <Paper sx={{ p: 2, height: "100%" }} >
                                <Typography>Usage</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}