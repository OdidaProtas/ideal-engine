import Box from "@mui/material/Box";
import Button from "@mui/material/Button"


import UploadIcon from "@mui/icons-material/FileUpload"

import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"

import { useState } from "react"
import FileUpload from "@mui/icons-material/FileUpload";
export default function () {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(p => !p);

    return (
        <Box>
            <Button startIcon={<UploadIcon />} color="secondary" onClick={toggle} >upload CSV</Button>
            <Dialog open={open} onClose={toggle} >
                <DialogTitle>Upload Features' CSV</DialogTitle>
                <DialogContent dividers >
                    <DialogContentText>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit doloribus veritatis quos, consequatur nisi architecto aliquam consectetur asperiores voluptatibus error recusandae quia exercitationem perspiciatis enim illum, voluptates tempora reprehenderit incidunt?
                    </DialogContentText>
                    <Box sx={{ height: 72, display: "flex", justifyContent: "center", alignItems: "center", my: 2, border: "1px solid lightgray" }} >
                        <DialogContentText>
                            React Dropzone widget
                        </DialogContentText>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button  color="secondary" onClick={toggle} >Cancel</Button>
                    <Button disableElevation color="secondary" variant="contained"  onClick={toggle} >Upload</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}