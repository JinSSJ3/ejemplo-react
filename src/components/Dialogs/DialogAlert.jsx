import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const DialogAlert = (props) => {
  const {
    onSuccess,
    onCancel,
    onClose,
    maxWidth,
    fullWidth,
    open,
    content,
    title,
  } = props;
  const handleSuccess = () => {
    if (onSuccess) {
      onSuccess();
    }
    handleClose();
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    handleClose();
  };
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <React.Fragment>
      <Dialog
        fullWidth={
          (fullWidth && ["xs", "sm", "md", "lg", "xl"].includes(fullWidth)) ||
          "sm"
        }
        maxWidth={maxWidth || true}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{title || ""}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content || ""}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {onCancel && (
            <Button onClick={handleCancel} color="primary">
              Cancelar
            </Button>
          )}
          {onSuccess && (
            <Button variant="contained" onClick={handleSuccess} color="primary">
              Aceptar
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default DialogAlert;
