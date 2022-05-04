import { Button } from "@mui/material";
import DataTable from "../components/TableData/TableData";
import { EndpointRequest } from '../utils/fetch';
import React from "react";
import * as action from '../actions/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from "../interfaces";
import { fetchData } from "../reducers/CustomerReducer";

export default function Customer() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData(dispatch)
  }, []);

  const handleEdit = (event: any, { row }: Row) => {
    console.log(row);
  };



  const columns = [
    { field: 'id', headerName: 'ID', width: 300, editable: false },
    { field: 'name', headerName: 'Name', width: 250, editable: false },
    { field: 'lastname', headerName: 'LastName', width: 250, editable: false },
    { field: 'age', headerName: 'Age', width: 90, editable: false },
    { field: 'phone', headerName: 'Phone', width: 250, editable: false },
    {
      field: 'Actions', width: 200, renderCell: (rowValues: Row) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(event, rowValues)}
            >
              Edit
            </Button>
            <Button variant="outlined" style={{ marginLeft: '10px' }}>
              Delete
            </Button>
          </>
        )
      }
    }
  ]

  return (
    <div style={{ maxWidth: '100%' }}>
      <DataTable columns={columns} title={'Customer'} />
    </div>
  )
}
