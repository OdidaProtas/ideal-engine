import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Plans from "./Plans"
import { useHistory } from "react-router-dom"
import Stack from "@mui/material/Stack"
export default function () {
    const { push } = useHistory()
    return (
        <Box>
            <Stack spacing={2}  >
                <Typography variant="h5" sx={{ my: 2 }} >Create an app</Typography>
                <TextField label="App Name" />
                <TextField label="description" />
                <Plans actions />
                <Box sx={{ pt: 5, textAlign: "right" }}  >
                    <Button onClick={() => push("/dashboard/Apps/new/checkout")} variant="contained" color="secondary" disableElevation  >Create APP</Button>
                </Box>
            </Stack>
        </Box>
    )
}