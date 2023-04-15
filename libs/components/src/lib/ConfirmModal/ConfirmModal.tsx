import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";
// import Login from "../LoginButton/LoginButton";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [isAgeVerified, setIsAgeVerified] = React.useState("");

  useEffect(() => {
    localStorage.setItem("isAgeVerified", "yes");

    if (
      localStorage.getItem("isAgeVerified") == "no" ||
      localStorage.getItem("isAgeVerified") == "yes"
    ) {
      const answer: any = localStorage.getItem("isAgeVerified");
      setIsAgeVerified(answer);
      setOpen(false);
    }
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (status: string = "") => {
    localStorage.setItem("isAgeVerified", status);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // eslint-disable-next-line react/jsx-no-duplicate-props
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          className="text-center modal-title"
        >
          {"Είσαι άνω των 18 ετών;"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions className="text-center modal-action">
          <button
            className="modal-secondary-button"
            onClick={() => handleClose("yes")}
          >
            Ναι
          </button>
          <button
            className="modal-primary-button"
            onClick={() => handleClose("no")}
          >
            Όχι
          </button>
        </DialogActions>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="text-center modal-content"
          >
            Δηλώνω ότι είμαι άνω των 18 ετών. Αναγνωρίζω ότι η δήλωση αυτή
            υπέχει θέση υπεύθυνης δήλωσης και ότι σε περίπτωση ψευδούς δήλωσης
            ισχύουν οι προβλεπόμενες στο νόμο κυρώσεις.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
