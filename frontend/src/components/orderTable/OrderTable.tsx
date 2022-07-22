import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { OrderState, RowCar } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createNewData } from '../../reducers/OrderReducer';
import { deleteOrderData, updateOrderData } from '../../actions/actions';
import Button from '@mui/material/Button';


const initialState = {
  id: '',
  field: '',
  value: ''
}


export default function OrderTable() {
  const dispatch = useDispatch()
  const { orderReducer }: any = useSelector((state) => state);
  const { order, page }: OrderState = orderReducer;
  const [quantity, setQuantity] = useState(initialState)
  const handleDelete = (event: any, { row }: any) => {
    dispatch(deleteOrderData(row.id))
  }
  const quantityChange = (row: RowCar) => {
    if (row.value !== '') {
      setQuantity(row)
    }
  }
  const columns = [
    {
      field: 'name',
      headerName: 'Product',
      width: 150,
      editable: false,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 160,
      editable: false
    },
    {
      field: 'Actions',
      width: 200,
      renderCell: (rowValues: any) => {
        return (
          <>
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
  useEffect(() => {
    if (quantity.value) {
      dispatch(updateOrderData(quantity))
    }
  }, [quantity]);

  const submitOrder = () => {
    createNewData(dispatch, order, page)
    console.log(order)
  }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={order.products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onCellEditCommit={quantityChange}
        disableSelectionOnClick
      />
      <Button
        onClick={submitOrder}
        variant="contained"
        style={
          {
            width: '90px',
            marginTop: '30px',
            marginBottom: '30px',
            marginLeft: '20px'
          }}
        type="submit">
        Buy
      </Button>
    </Box>
  );
}