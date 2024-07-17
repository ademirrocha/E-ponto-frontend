import { Box, Button, Modal, Typography } from "@mui/material";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  interface ModalConfirmationProps {
    open: boolean;
    handleCloseModal: () => void
    handleConfirmData?: () => void
  }

function ModalConfirmation({open, handleCloseModal, handleConfirmData}: ModalConfirmationProps){

    return(
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                Title Modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 3, fontSize: 14 }}>
                Descriptions?</Typography>
                <Box sx={{display: "flex", justifyContent: "flex-end", mt: 4}}>
                    <Button variant="text" sx={{color: "#C62828", fontWeight: 600}} onClick={handleCloseModal}>Cancelar</Button>
                    <Button type="submit" variant="text" sx={{ fontWeight: 600}} onClick={handleConfirmData}>Confirmar</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalConfirmation