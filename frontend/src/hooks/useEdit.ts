import { useState } from 'react';
import { Row } from '../interfaces';

export function useEditData(initialState:any) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const [value, setValue] = useState(initialState);
  const handleClose = () => {
    setOpen(false)
    setValue(initialState)
  };

  const handleEdit = (event: any, { row }: Row) => {
    setValue(row)
    setOpen(true)
  };
 
  const handleCreate = () => {
    setOpen(true)
  };

  return {
      open,
      handleEdit,
      handleClose,
      handleOpen,
      setOpen,
      value,
      handleCreate
  }
}
