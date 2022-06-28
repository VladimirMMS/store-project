import { Button } from '@mui/material';
import DataTable from '../components/TableData/TableData';
import { useSelector, useDispatch } from 'react-redux';
import { orderInitial, OrderState, Row, RowOrder } from '../interfaces';
import { deleteData, fetchData } from '../reducers/OrderReducer';
import { useEditData } from '../hooks/useEdit';
import { useDeleteData } from '../hooks/useDelete';
import AlertDialog from '../components/alertDialog/AlertDialog';
import { useTableManage } from '../hooks/useTableManage';
import { useNavigate } from "react-router-dom";
import { getInputCurrentState, getInputState } from '../actions/actions';

const initialState: orderInitial = {
  customer: '',
  products: '',
  address: ''
}


export default function Order() {
  let navigate = useNavigate();
  const { orderReducer }: any = useSelector((state) => state);
  const { rows, count }: OrderState = orderReducer;
  const handleEdit = (event: any, { row }: any) => {
    console.log(row)
    navigate('/admin/order/create');
    dispatch(getInputCurrentState(row))
  };
  const { page, handlePageChange, handleSort, handleFilter } = useTableManage(fetchData)
  const { openDelete, handleDeleteClose, handleConfirm, handleDelete } = useDeleteData(deleteData, page)
  const dispatch = useDispatch();
  const handleCreate = () => {
    dispatch(getInputState(initialState))
    navigate('/admin/order/create');

  }
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
        handlePageChange={handlePageChange}
        page={page}
        handleSort={handleSort}
        handleFilter={handleFilter}
      />
    </div>
  );
}
