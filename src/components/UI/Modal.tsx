import { Box, Modal as MuiModal, styled } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ open, onClose, children }: Props) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <ModalContent>{children}</ModalContent>
    </MuiModal>
  );
};

export default Modal;

const ModalContent = styled(Box)(() => ({
  background: "#fff",
  padding: "30px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
}));
