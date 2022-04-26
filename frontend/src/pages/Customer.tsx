import { Button } from "@mui/material";
import React from "react";
import DataTable from "../components/TableData/TableData";
import useActionHook from '../hooks/actionTableHook'

export default function Customer() {

  const {handleEdit, data} = useActionHook('/customer')

    

    const columns = [
        {field: 'id', headerName: 'ID', width: 300, editable: false},
        {field: 'name', headerName: 'Name', width: 250, editable: false},
        {field: 'lastname', headerName: 'LastName', width: 250, editable: false},
        {field: 'age', headerName: 'Age', width: 90, editable: false},
        {field: 'phone', headerName: 'Phone', width: 250, editable: false},
        {field: 'Actions', width: 200, renderCell: (rowValues:object) => {
        return (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    handleEdit(rowValues)
                 }}
              >
                Edit
              </Button>
            <Button variant="outlined" style={{marginLeft: '10px'}}>
            Delete
          </Button>
          </>
        )
    }
  }
    ]
  
    return (
      <div style={{ maxWidth: '100%' }}>
        <DataTable data={data} columns={columns} title={'Customer'}/>
      </div>
    )
}
