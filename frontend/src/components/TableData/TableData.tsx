import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { PropsTable } from '../../interfaces';
import ModalForm from '../modalForm/ModalForm';
import { useEditData } from '../../hooks/useEdit';

export default function DataTable({ columns, title, data, initialState,handlePageChange, page }: any) {
  const {handleClose, handleOpen, setOpen, open} = useEditData()
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
      <ModalForm open={open} handleClose={handleClose} setOpen={setOpen} initialState={initialState}/>
      <DataGrid
        rows={data.rows} 
        columns={columns}
        pagination
        pageSize={10}
        rowCount={data.count}
        paginationMode="server"
        onPageChange={handlePageChange}
        rowHeight={75}
        autoHeight={true}
        page={page}
        disableSelectionOnClick
      />
    </div>
  );
}
