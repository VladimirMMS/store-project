import { Button } from '@mui/material';
import DataTable from '../components/TableData/TableData';
import {  useSelector } from 'react-redux';
import {  Row, State } from '../interfaces';
import { deleteData, customerFetchData } from '../reducers/CustomerReducer';
import { useEditData } from '../hooks/useEdit';
import EditModal from '../components/editModal/EditModal';
import { useDeleteData } from '../hooks/useDelete';
import AlertDialog from '../components/alertDialog/AlertDialog';
import { useTableManage } from '../hooks/useTableManage';
import ModalForm from '../components/modalForm/ModalForm';


const initialState = {
  name: '',
  lastName: '',
  date: '',
  phone: ''
}




export default function Customer() {
  

  const { customerReducer }: any = useSelector((state) => state);
  const { rows, count }: State = customerReducer;
  const {page, handlePageChange, handleSort, handleFilter} = useTableManage(customerFetchData)
  const { open, handleClose, handleEdit, setOpen, value, handleCreate } = useEditData(initialState)
  const { openDelete, handleDeleteClose, handleConfirm, handleDelete } = useDeleteData(deleteData, page)
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 300, editable: false },
    { field: 'name', headerName: 'Name', width: 250, editable: false },
    { field: 'lastName', headerName: 'LastName', width: 250, editable: false },
    { field: 'date', headerName: 'Age', width: 90, editable: false },
    { field: 'phone', headerName: 'Phone', width: 250, editable: false },
    {
      field: 'Actions',
      width: 200,
      renderCell: (rowValues: Row) => {
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
      <ModalForm open={open} handleClose={handleClose} setOpen={setOpen} initialState={value} title='Customer' />
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
        Create a Customer
      </Button>
      <DataTable 
      columns={columns} 
      title={'Customer'} 
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
