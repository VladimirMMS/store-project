import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {  CarOrder, OrderState, RowCar } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { editData } from '../../reducers/OrderReducer';
import { updateOrderData } from '../../actions/actions';

const columns = [
  {
    field: 'product',
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
];
const initialState = {
  id: '',
  field: '',
  value: ''
}


export default function OrderTable() {
  const dispatch = useDispatch()
  const { orderReducer }: any = useSelector((state) => state);
  const { order }: OrderState = orderReducer;
  const [quantity, setQuantity] = useState(initialState)
  const quantityChange = (row: RowCar) => {
    if(row.value !== '') {
      setQuantity(row)
    }
  }
  useEffect(() => {
    if(quantity.value) {
      dispatch(updateOrderData(quantity))
    }
    
  }, [quantity]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={order}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onCellEditCommit={quantityChange}
        disableSelectionOnClick
      />
    </Box>
  );
}