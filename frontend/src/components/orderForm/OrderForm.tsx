import React, { useState } from 'react';
import { Autocomplete, Button, Input, InputLabel, TextField } from '@mui/material';
import { useStyle } from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { OrderState, ProductState, State } from '../../interfaces';
import { useTableManage } from '../../hooks/useTableManage';
import { fetchData } from '../../reducers/ProductReducer';
import { customerFetchData } from '../../reducers/CustomerReducer';
import { createNewData, editData } from '../../reducers/OrderReducer';
import OrderTable from '../orderTable/OrderTable';
import * as action from '../../actions/actions';

const initialState = {
  customer: '',
  product: '',
  address: '',
  price: '',
  quantity: '1',

}


export default function OrderForm() {
  const classes = useStyle();
  const dispatch = useDispatch();
  useTableManage(fetchData)
  useTableManage(customerFetchData)
  const { orderReducer, customerReducer }: any = useSelector((state) => state);

  const { page }: OrderState = orderReducer;
  const { productReducer }: any = useSelector((state) => state);
  const { rows: productRows }: ProductState = productReducer;
  const { rows: customerRows }: State = customerReducer;
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      customer: Yup.string(),
      product: Yup.string(),
      address: Yup.string(),
      quantity: Yup.number(),
      price: Yup.number()
    }),
    onSubmit: (formData: any, actions) => {
      if (Object.keys(initialState?.address).length == 0) {
        dispatch(action.createOrderData(formData))
      }
      else {
        editData(dispatch, formData)
      }

      actions.resetForm({
        values: {
          product: '',
          quantity: '1',
          price: '',

        }
      })
    }
  });

  return (
    <div className={classes.container}>
      <h2 className={classes.formTitle}>Create A Order</h2>
      <form className={classes.containerForm} onSubmit={formik.handleSubmit}>
        <Autocomplete
          value={undefined}
          disablePortal
          id="customer"
          options={customerRows.map((option, value) => option.name)}
          onChange={(event, value) => {
            formik.setFieldValue("customer", value)
          }}
          style={{ width: '100%', marginRight: '20px' }}
          renderInput={(params) =>
            <TextField
              {...params}
              label="Select a Customer"

            />}
        />
        <Autocomplete
          id="product"
          value={formik.values.product || null}
          style={{ width: '100%', marginRight: '20px' }}
          options={productRows.map((option) => option.name)}
          onChange={(event, value) => {
            formik.setFieldValue("product", value)
            const found = productRows.filter((element) => {
              return element.name == value

            })
            if (found.length) {
              formik.setFieldValue("price", found[0].price)
            }


          }}
          renderInput={(params) => (
            <TextField {...params}
              label="Select Product"
              margin="normal"
            />
          )}
        />

        <Input
          style={{ width: '20%' }}
          type='number'
          placeholder='QYT'
          inputProps={{
            step: 1,
            min: 1,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
          value={formik.values.quantity}
          onChange={(event) => {
            formik.setFieldValue("quantity", event.target.value);
          }}

        />

        <TextField
          className={classes.input}
          style={{ marginLeft: '20px' }}
          type="text"
          name="address"
          variant="outlined"
          placeholder="Type the Address"
          onChange={formik.handleChange}
          value={undefined}
          error={Boolean(formik.errors.address)}
        />
        <Button variant="contained" style={{ width: '90px', marginTop: '30px', marginBottom: '30px', marginLeft: '20px' }} type="submit">
          Add
        </Button>
      </form>
      <OrderTable />
    </div>
  );
}
