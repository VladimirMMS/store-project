import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { PropsTable } from '../../interfaces';
import ModalForm from '../modalForm/ModalForm';


export default function DataTable({data, columns, title}: PropsTable) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography style={
        {paddingTop: '40px', 
        fontFamily:'serif', 
        fontSize:'2em', 
        marginBottom: '30px', 
        marginLeft: '10px'}
    }
      >
        {title}Table
      </Typography>
      <Button onClick={handleOpen} style={{marginLeft:'10px'}}>Create a {title}</Button>
      <ModalForm open={open} handleClose={handleClose} setOpen={setOpen}/>
      <DataGrid
      rowHeight={75}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}