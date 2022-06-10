import React, { useEffect, useState } from 'react';
import { Button, InputLabel,TextField, Typography } from '@mui/material';
import { useStyle } from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editData, createNewData } from '../../reducers/CategoryReducer';
import { CategoryState } from '../../interfaces';


export default function CategoryForm({ setOpen, initialState }: any) {

  const { categoryReducer }: any = useSelector((state) => state);
  const { page }: CategoryState = categoryReducer;
  console.log(page)
  const classes = useStyle();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      name: Yup.string()
        .strict(true)
        .matches(/^[A-Za-z]+$/)
        .required('This field is required')
    }),
    onSubmit: (formData: any) => {
      if (Object.keys(initialState.name).length == 0) {
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
          {initialState.name ? "Edit a Category": "Register a Category"}
        </Typography>
        <form onSubmit={formik.handleSubmit}>
        <InputLabel htmlFor="my-input" className={classes.label}>
          CategoryName
        </InputLabel>
        <TextField
          className={classes.input}
          name="name"
          variant="outlined"
          placeholder="Type category's name"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={Boolean(formik.errors.name)}
        />
        <Button variant="outlined" size="large" style={{ marginTop: '20px' }} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
