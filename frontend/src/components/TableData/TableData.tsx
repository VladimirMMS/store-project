import { useEffect, useState } from 'react';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { PropsTable } from '../../interfaces';
import ModalForm from '../modalForm/ModalForm';
import { useSelector } from 'react-redux';


export default function DataTable({ columns, title }: PropsTable) {

  const { crudReducer }: any = useSelector(state => state)
  const { data } = crudReducer
  const [customerData, setCustomerData] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setCustomerData(data)
  }, [data]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography style={
        {
          paddingTop: '40px',
          fontFamily: 'serif',
          fontSize: '2em',
          marginBottom: '30px',
          marginLeft: '10px'
        }
      }
      >
        {title}Table
      </Typography>
      <Button onClick={handleOpen} style={{ marginLeft: '10px' }}>Create a {title}</Button>
      <ModalForm open={open} handleClose={handleClose} setOpen={setOpen} />
      <DataGrid
        rowHeight={75}
        columns={columns}
        rows={customerData}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}