import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import ModalForm from '../modalForm/ModalForm';
import { useEditData } from '../../hooks/useEdit';
import ProductForm from '../productForm/productForm';

export default function DataTable({
  columns,
  title,
  rows,
  count,
  handlePageChange,
  handleSort,
  handleFilter,
  page }: any) {
  // const { handleClose, handleOpen, setOpen, open } = useEditData()
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
      {/* <Button onClick={handleOpen} style={{ marginLeft: '10px', WebkitBoxPack: 'start', WebkitJustifyContent: 'start' }}>
        Create a {title}
      </Button> */}

      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={10}
        rowCount={count}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        onPageChange={handlePageChange}
        onFilterModelChange={handleFilter}
        sortingOrder={['desc', 'asc']}
        onSortModelChange={handleSort}
        rowHeight={75}
        autoPageSize={true}
        autoHeight={true}
        page={page}

        disableSelectionOnClick
      />
    </div>
  );
}
