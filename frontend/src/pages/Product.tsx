import { Button } from '@mui/material';
import DataTable from '../components/TableData/TableData';
import { useSelector } from 'react-redux';
import { ProductState } from '../interfaces';
import { useEditData } from '../hooks/useEdit';
import { useDeleteData } from '../hooks/useDelete';
import AlertDialog from '../components/alertDialog/AlertDialog';
import { useTableManage } from '../hooks/useTableManage';
import { deleteData, fetchData } from '../reducers/ProductReducer'
import ModalForm from '../components/modalForm/ModalForm';


const initialState = {
  name: '',
  price: '',
  categoryId: '',
}


export default function Product() {
  const { productReducer }: any = useSelector((state) => state);
  const { rows, count }: ProductState = productReducer;
  const { open, handleClose, handleEdit, setOpen,handleCreate, value } = useEditData(initialState)
  const { page, handlePageChange, handleSort, handleFilter } = useTableManage(fetchData)
  const { openDelete, handleDeleteClose, handleConfirm, handleDelete } = useDeleteData(deleteData, page)
  
  const columns = [
    { field: 'id', headerName: 'productId', width: 300, editable: false },
    { field: 'name', headerName: 'ProductName', width: 250, editable: false },
    { field: 'price', headerName: 'Price', width: 90, editable: false },
    { field: `category`, headerName: 'Category', width: 100, editable: false },
    {
      field: 'Actions',
      width: 200,
      renderCell: (rowValues: any) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleEdit(event, rowValues)
              }}
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
      <ModalForm open={open} handleClose={handleClose} setOpen={setOpen} initialState={value} title='Product' />
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
        Create a Product
      </Button>
      <DataTable
        columns={columns}
        title={'Product'}
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
