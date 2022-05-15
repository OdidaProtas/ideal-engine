import Button from "@mui/material/Button"
import Box from "@mui/material/Box";
import Link from "@mui/material/Link"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";

import Checkbox from "@mui/material/Checkbox"

import TextField from "@mui/material/TextField"

export default function () {

    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(p => !p)

    return (
        <>
            <Box>
                <Button color="secondary" fullWidth variant="contained" onClick={toggle} disableElevation  >Send Verification Code</Button>
                <Dialog open={open} onClose={toggle} fullWidth maxWidth="xs"  >
                    <DialogTitle>Verify Phone Number</DialogTitle>
                    <DialogContent dividers  >
                        <DialogContentText sx={{ mb: 2 }}  >
                            Enter verification code sent to 07 XX-XXX 87
                        </DialogContentText>
                        <DialogContentText variant="caption" >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum nihil voluptatibus quam totam non minima nisi laudantium quidem doloribus ex odio, suscipit ratione cumque corrupti expedita, labore modi accusantium!
                        </DialogContentText>
                        <Box sx={{ mt: 2 }} >
                            <TextField placeholder="0000" fullWidth />
                            <Box sx={{ my: 2 }} >
                                <DialogContentText variant="caption" >
                                    By confirming your number, you <Link>agree to our terms and privacy policy</Link>
                                </DialogContentText>
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={toggle} >Cancel</Button>
                        <Button onClick={toggle} color="secondary" variant="contained" disableElevation >Confirm Verification code</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}