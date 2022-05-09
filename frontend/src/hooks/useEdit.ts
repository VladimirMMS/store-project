import { useState } from 'react';
import { Row } from '../interfaces';

export function useEditData() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [value, setValue] = useState({});

  const handleEdit = (event: any, { row }: Row) => {
    setValue(row)
    setOpen(true)
  };
 

  return {
      open,
      handleEdit,
      handleClose,
      handleOpen,
      setOpen,
      value,
  }
}
