import { Button } from '@mui/material';
import DataTable from '../components/TableData/TableData';
import { useSelector } from 'react-redux';
import { OrderState, RowOrder } from '../interfaces';
import { deleteData, fetchData } from '../reducers/OrderReducer';
import { useEditData } from '../hooks/useEdit';
import EditModal from '../components/editModal/EditModal';
import { useDeleteData } from '../hooks/useDelete';
import AlertDialog from '../components/alertDialog/AlertDialog';
import { useTableManage } from '../hooks/useTableManage';
import ModalForm from '../components/modalForm/ModalForm';


const initialState = {
  customerId: '',
  address: '',
}




export default function Order() {

  const { orderReducer }: any = useSelector((state) => state);
  const { rows, count }: OrderState = orderReducer;
  const { open, handleClose, handleEdit, setOpen, value, handleCreate } = useEditData(initialState)
  const { openDelete, handleDeleteClose, handleConfirm, handleDelete } = useDeleteData(deleteData)
  const { page, handlePageChange, handleSort, handleFilter } = useTableManage(fetchData)
  const columns = [
    { field: 'id', headerName: 'ID', width: 300, editable: false },
    { field: 'customer', headerName: 'Customer', width: 250, editable: false },
    { field: 'address', headerName: 'Address', width: 250, editable: false },
    {
      field: 'Actions',
      width: 200,
      renderCell: (rowValues: RowOrder) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(event, rowValues)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              style={{ marginLeft: '10px' }}
              onClick={() => handleDelete(event, rowValues)}>
              Delete
            </Button>
          </>
        );
      }
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <AlertDialog open={openDelete} handleClose={handleDeleteClose} handleConfirm={handleConfirm} />
      <ModalForm open={open} handleClose={handleClose} setOpen={setOpen} initialState={value} title='Order' />
      <Button
        onClick={handleCreate}
        style={{
          paddingTop: '40px',
          fontFamily: 'serif',
          fontSize: '1em',
          marginBottom: '5px',
          marginLeft: '10px',
          WebkitJustifyContent: 'flex-start',
          justifyContent: 'flex-start'
        }}>
        Create a Order
      </Button>
      <DataTable
        columns={columns}
        title={'Order'}
        rows={rows}
        count={count}
        initialState={initialState}
        handlePageChange={handlePageChange}
        page={page}
        handleSort={handleSort}
        handleFilter={handleFilter}
      />
    </div>
  );
}
