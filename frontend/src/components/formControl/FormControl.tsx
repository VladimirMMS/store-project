import React from 'react';
import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { useStyle } from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editData, createNewData,  } from '../../reducers/CustomerReducer';
import { State } from '../../interfaces';

export default function FormCreate({ setOpen, initialState }: any) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { customerReducer }: any = useSelector((state) => state);
  const { page }: State = customerReducer;
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      name: Yup.string()
        .strict(true)
        .matches(/^[A-Za-z]+$/)
        .required('This field is required'),
      lastName: Yup.string()
        .strict(true)
        .matches(/^[A-Za-z]+$/)
        .required('This field is required'),
      date: Yup.date().required(),
      phone: Yup.number().required('This field is required')
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
          {initialState.name ? "Edit a Customer": "Register a Customer"}
        </Typography>
      <form onSubmit={formik.handleSubmit}>
        <InputLabel htmlFor="my-input" className={classes.label}>
          Name
        </InputLabel>
        <TextField
          className={classes.input}
          name="name"
          variant="outlined"
          placeholder="Type your name"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={Boolean(formik.errors.name)}
        />
        <InputLabel htmlFor="my-input" className={classes.label}>
          LastName
        </InputLabel>
        <TextField
          className={classes.input}
          type="text"
          name="lastName"
          variant="outlined"
          placeholder="Type your lastname"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          error={Boolean(formik.errors.lastName)}
        />
        <InputLabel htmlFor="my-input" className={classes.label}>
          Birthday
        </InputLabel>
        <TextField
        className={classes.input}
        name="date"
        placeholder="Type Your Birthday"
        type="date"
        variant="outlined"
        autoComplete="off"
        color="primary"
        onChange={formik.handleChange}
        value={formik.values.date}
        error={Boolean(formik.errors.date)}
      />

        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <TextField
          className={classes.input}
          name="phone"
          color="primary"
          placeholder="Type Your phone"
          variant="outlined"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={Boolean(formik.errors.phone)}
        />
        <Button variant="outlined" size="large" style={{ marginTop: '20px' }} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
