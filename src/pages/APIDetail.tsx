import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
export default function () {
    const { ctx } = useParams() as any;
    return (
        <>
            <Typography variant="h5" sx={{ my: 2 }} >{ctx}</Typography>
            <Box sx={{ my: 2 }} >
                <Typography>ENDPOINT</Typography>
                <Link>https://api.{window.location.hostname}.com/{ctx}</Link>
            </Box>
            <Box sx={{ my: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eveniet quod distinctio, nemo officia impedit placeat cumque maiores ratione aliquid recusandae adipisci illo dicta cum rerum inventore libero incidunt velit!
            </Box>
            <Box>
                <Accordion  >
                    <AccordionSummary>
                        Request Header
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sint quo rem illum harum iusto, numquam architecto optio repellat corrupti fugit libero? Iusto doloribus esse magnam, laborum corporis incidunt ea!
                    </AccordionDetails>
                    <AccordionActions />
                </Accordion>
                <Accordion  >
                    <AccordionSummary>
                        Request Parameters
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sint quo rem illum harum iusto, numquam architecto optio repellat corrupti fugit libero? Iusto doloribus esse magnam, laborum corporis incidunt ea!
                    </AccordionDetails>
                    <AccordionActions />
                </Accordion>
                <Accordion  >
                    <AccordionSummary>
                        Request Body
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sint quo rem illum harum iusto, numquam architecto optio repellat corrupti fugit libero? Iusto doloribus esse magnam, laborum corporis incidunt ea!
                    </AccordionDetails>
                    <AccordionActions />
                </Accordion>
            </Box>
        </>
    )
}