import React from 'react';
import { Autocomplete, Button, InputLabel, TextField } from '@mui/material';
import { useStyle } from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { OrderState, ProductState, State } from '../../interfaces';
import { useTableManage } from '../../hooks/useTableManage';
import { fetchData } from '../../reducers/ProductReducer';
import { customerFetchData } from '../../reducers/CustomerReducer';
import { createNewData, editData } from '../../reducers/OrderReducer';

const initialState = {
  customer: '',
  products: '',
  address: ''
}


export default function OrderForm() {
  const classes = useStyle();
  const dispatch = useDispatch();
  useTableManage(fetchData)
  useTableManage(customerFetchData)
  const { orderReducer }: any = useSelector((state) => state);
  const { page }: OrderState = orderReducer;
  const { productReducer }: any = useSelector((state) => state);
  const { rows: productRows}: ProductState = productReducer;
  const { customerReducer }: any = useSelector((state) => state);
  const { rows: customerRows }: State = customerReducer;
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      customer: Yup.string(),
      products: Yup.string(),
      address: Yup.string()
    }),
    onSubmit: (formData: any, actions) => {
      console.log(formData)
      if (Object.keys(initialState?.address).length == 0) {
        createNewData(dispatch, formData, page);
      }
      else {
        editData(dispatch, formData)
      }
      actions.resetForm({
        values: {
          customer: '',
          products: '',
          address: ''

        }
      })
    }
  });

  return (
    <div className={classes.container}>
        <h2 className={classes.formTitle}>Create A Order</h2>
       <form className={classes.containerForm} onSubmit={formik.handleSubmit}>
        <InputLabel htmlFor="my-input" className={classes.label}>
          Select A Customer
        </InputLabel>
        <Autocomplete
          defaultValue={formik.values.customer}
          value={formik.values.customer}
          disablePortal
          id="customer"
          options={customerRows.map((option) => option.name+ ` ${option.lastName}`)}
          onChange={(event, value) => {
            formik.setFieldValue("customer", value)
          }}
          style={{ width: 500 }}
          renderInput={(params) => 
          <TextField 
          {...params} 
          label="Customer"
          />}
        />
        <InputLabel htmlFor="my-input" className={classes.label}>
          Select A Product
        </InputLabel>
        <Autocomplete
          id="product"
          defaultValue={formik.values.products}
          value={formik.values.products}
          sx={{ width: 500 }}
          options={productRows.map((option) => option.name)}
          onChange={(event, value) => {
            formik.setFieldValue("products",value)
          }}
          renderInput={(params) => (
            <TextField {...params} 
            label="Product" 
            margin="normal"
            />
            )}
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
        <Button variant="contained" style={{width: '90px', marginTop: '30px', marginBottom: '30px'}} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
