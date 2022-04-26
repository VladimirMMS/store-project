import React from 'react'
import {  Button, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useStyle } from './style';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import * as action from '../../actions/actions'
import { DataCustomer } from '../../interfaces';

export default function FormCreate({setOpen}:any) {
    const classes = useStyle();
    const dispatch = useDispatch();

    const formik = useFormik({
            initialValues: {
                name: '',
                lastname: '',
                age: 0,
                phone: ''
            },
            validationSchema: Yup.object({
                name: Yup.string().strict(true).matches(/^[A-Za-z]+$/).required('This field is required'),
                lastname: Yup.string().strict(true).matches(/^[A-Za-z]+$/).required('This field is required'),
                age: Yup.number().required('This field is required'),
                phone: Yup.number().required('This field is required')

            }),
            onSubmit: (formData: DataCustomer) => {
                setOpen(false)
                location.reload()
                dispatch(action.createData(formData))
            }
        })

    return (
        <div>
            <Typography id="modal-modal-title" variant="h6" component="h2" className={classes.formTitle}>
                Register a Customer
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <InputLabel htmlFor="my-input" className={classes.label}>Name</InputLabel>
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
                    <InputLabel htmlFor="my-input" className={classes.label}>LastName</InputLabel>
                    <TextField
                    className={classes.input}
                    type="text"
                    name="lastname"
                    variant="outlined"
                    placeholder="Type your lastname"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    error={Boolean(formik.errors.lastname)}
                    />
                    <InputLabel htmlFor="my-input" className={classes.label}>Age</InputLabel>
                    <Select
                        style={{width:'80%'}}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        name="age"
                        onChange={formik.handleChange}
                        value={formik.values.age}
                        error={Boolean(formik.errors.age)}
                    >
                <MenuItem value="" disabled>
                    <em>Select your age</em>
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                </Select>
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
                <Button variant="outlined" size="large" style={{marginTop:'20px'}} type="submit">
                    Save
                </Button>
            </form>
        </div>
    )
}
