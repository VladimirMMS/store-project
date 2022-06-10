import React, { useEffect, useState } from 'react';
import { Box, Button, InputLabel, Modal, TextField, Typography } from '@mui/material';
import { useStyle } from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editData, createNewData } from '../../reducers/OrderReducer';
import { OrderState } from '../../interfaces';


export default function OrderForm({ setOpen, initialState }: any) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { orderReducer }: any = useSelector((state) => state);
  const { page }: OrderState = orderReducer;
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      customerId: Yup.string()
        .strict(true)
        .matches(/^[0-9a-z]*-+/)
        .required('This field is required'),
      address: Yup.string().strict(true)
        .required('This field is required')
    }),
    onSubmit: (formData: any) => {
      if (Object.keys(initialState.address).length == 0) {
        createNewData(dispatch, formData, page);
      }
      else {
        editData(dispatch, formData)
      }
      setOpen(false);
    }
  });

  return (
    <div>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: '25px'}}>
          {initialState.customerId ? "Edit an Order": "Register an Order"}
        </Typography>
        <form onSubmit={formik.handleSubmit}>
        <InputLabel htmlFor="my-input" className={classes.label}>
          customerId
        </InputLabel>
        <TextField
          className={classes.input}
          name="customerId"
          variant="outlined"
          placeholder="Type the customer Id"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.customerId}
          error={Boolean(formik.errors.customerId)}
        />
        <InputLabel htmlFor="my-input" className={classes.label}>
          Adress
        </InputLabel>
        <TextField
          className={classes.input}
          type="text"
          name="address"
          variant="outlined"
          placeholder="Type the Address"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.address}
          error={Boolean(formik.errors.address)}
        />

        <Button variant="outlined" size="large" style={{ marginTop: '20px' }} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
