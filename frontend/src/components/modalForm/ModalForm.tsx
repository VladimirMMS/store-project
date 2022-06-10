import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FormCreate from '../formControl/FormControl';
import ProductForm from '../productForm/productForm';
import OrderForm from '../orderForm/OrderForm';
import CategoryForm from '../categoryForm/CategoryForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function ModalForm({ open, handleClose, setOpen, initialState, title }: any) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {(title === 'Product')? <ProductForm
            setOpen={setOpen}
            initialState={initialState}
            open={open}
            handleClose={handleClose}
          />: (title === 'Customer') ? 
          <FormCreate
            setOpen={setOpen}
            initialState={initialState}
            open={open}
            handleClose={handleClose}
          
          />: (title === 'Order') ? 
            <OrderForm
            setOpen={setOpen}
            initialState={initialState}
            open={open}
            handleClose={handleClose}
            />
          : (title === 'Category') ? 
          <CategoryForm
          setOpen={setOpen}
          initialState={initialState}
          open={open}
          handleClose={handleClose}
          />
          : ''
        }


        </Box>
      </Modal>
    </div>
  );
}
