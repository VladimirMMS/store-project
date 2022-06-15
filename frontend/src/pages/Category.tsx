import { Button } from '@mui/material';
import DataTable from '../components/TableData/TableData';
import { useSelector } from 'react-redux';
import { CategoryState,  RowCategory } from '../interfaces';
import { useEditData } from '../hooks/useEdit';
import { useDeleteData } from '../hooks/useDelete';
import AlertDialog from '../components/alertDialog/AlertDialog';
import { useTableManage } from '../hooks/useTableManage';
import {deleteData, fetchData} from '../reducers/CategoryReducer'
import ModalForm from '../components/modalForm/ModalForm';

const initialState = {
  name: ''
}




export default function Category() {
  const { categoryReducer }: any = useSelector((state) => state);
  const { rows, count }: CategoryState = categoryReducer;
  const { open, handleClose, handleEdit, setOpen, value, handleCreate } = useEditData(initialState)
  const {page, handlePageChange, handleSort, handleFilter} = useTableManage(fetchData)
  const { openDelete, handleDeleteClose, handleConfirm, handleDelete } = useDeleteData(deleteData, page)
  
  const columns = [
    { field: 'id', headerName: 'CategoryId', width: 300, editable: false },
    { field: 'name', headerName: 'CategoryName', width: 250, editable: false },
    {
      field: 'Actions',
      width: 200,
      renderCell: (rowValues: RowCategory) => {
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
      <ModalForm open={open} handleClose={handleClose} setOpen={setOpen} initialState={value} title='Category' />
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
        Create a Category
      </Button>
      <DataTable
        columns={columns}
        title={'Category'}
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
