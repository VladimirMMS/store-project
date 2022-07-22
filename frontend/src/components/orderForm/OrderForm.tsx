import React, { useState } from 'react';
import { Autocomplete, Button, Input, InputLabel, TextField } from '@mui/material';
import { useStyle } from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { CarOrder, OrderState, ProductState, State } from '../../interfaces';
import { useTableManage } from '../../hooks/useTableManage';
import { fetchData } from '../../reducers/ProductReducer';
import { customerFetchData } from '../../reducers/CustomerReducer';
import { createNewData, editData } from '../../reducers/OrderReducer';
import OrderTable from '../orderTable/OrderTable';
import * as action from '../../actions/actions';

const initialState = {
  customer: '',
  name: '',
  address: '',
  price: '',
  quantity: '1',

}


interface StateO {
  customer: string;
  name: string;
  address: string;
  price: string;
  quantity: string;
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
      name: Yup.string(),
      address: Yup.string(),
      quantity: Yup.number(),
      price: Yup.number()
    }),
    onSubmit: (formData: StateO, actions) => {

      if (Object.keys(initialState?.address).length == 0) {
        const {customer,address, ...orderRest} = formData;
        const orderData: CarOrder = {
          customer,
          address,
          products:[orderRest]

        }
        dispatch(action.createOrderData(orderData))
      }
      else {
        editData(dispatch, formData)
      }


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
          options={customerRows}
          getOptionLabel={(option: any) => option.name}
          onChange={(event, value) => {
            formik.setFieldValue("customer", value?.id)
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
          value={formik.values.name || null}
          style={{ width: '100%', marginRight: '20px' }}
          options={productRows.map((option) => option.name)}
          onChange={(event, value) => {
            formik.setFieldValue("name", value)
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
          value={formik.values.address}
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
