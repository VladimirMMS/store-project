import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { Data, PropsTable } from '../../interfaces';
import ModalForm from '../modalForm/ModalForm';
import { useSelector } from 'react-redux';

export default function DataTable({ columns, title }: PropsTable) {
  const { customerReducer }: any = useSelector((state) => state);
  const { data }: Data = customerReducer;

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography
        style={{
          paddingTop: '40px',
          fontFamily: 'serif',
          fontSize: '2em',
          marginBottom: '30px',
          marginLeft: '10px'
        }}
      >
        {title}Table
      </Typography>
      <Button onClick={handleOpen} style={{ marginLeft: '10px' }}>
        Create a {title}
      </Button>
      <ModalForm open={open} handleClose={handleClose} setOpen={setOpen} />
      <DataGrid
        rowHeight={75}
        columns={columns}
        rows={data}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}
