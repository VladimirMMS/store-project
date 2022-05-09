import { useState } from 'react';
import { Row } from '../interfaces';
import { useDispatch } from 'react-redux';
import { deleteData } from '../reducers/CustomerReducer';

export function useDeleteData() {
  const dispatch = useDispatch()
  const [openDelete, setDeleteOpen] = useState<boolean>(false);
  const handleDeleteClose = () => setDeleteOpen(false);
  const [value, setValue] = useState<any>('');
  const handleDelete = (event: any, { row }: Row) => {
    setValue(row.id);
    setDeleteOpen(true);
  };
  const handleConfirm = () => {
    deleteData(dispatch, value)
    setDeleteOpen(false);
  };

  return {
    openDelete,
    handleDeleteClose,
    handleDelete,
    setDeleteOpen,
    handleConfirm
  };
}
