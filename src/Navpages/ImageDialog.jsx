import { Dialog } from "@mui/material";

function ImageDialog({ open, handleClose, selectedImage }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <img src={selectedImage} style={{ overflow: "hidden" }} />
    </Dialog>
  );
}

export default ImageDialog;
