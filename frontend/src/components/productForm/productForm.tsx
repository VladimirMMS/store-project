import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { useStyle } from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editData, createNewData } from '../../reducers/ProductReducer';
import { CategoryState, ProductState } from '../../interfaces';
import { fetchData } from '../../reducers/CategoryReducer';
import { useTableManage } from '../../hooks/useTableManage';

export default function ProductForm({ setOpen, initialState }: any) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { productReducer }: any = useSelector((state) => state);
  const { page }: ProductState = productReducer;
  const { categoryReducer }: any = useSelector((state) => state);
  const { rows }: CategoryState = categoryReducer;
  useTableManage(fetchData)

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      name: Yup.string()
        .strict(true)
        .matches(/^[A-Za-z]+$/)
        .required('This field is required'),
      price: Yup.number().strict(true)
        .required('This field is required'),
      categoryId: Yup.string().required('This field is required')
    }),
    onSubmit: async (formData: any) => {
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
      <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: '25px' }}>
        {initialState.name ? "Edit a Product" : "Register a Product"}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <InputLabel htmlFor="my-input" className={classes.label}>
          ProductName
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
          Price
        </InputLabel>
        <TextField
          className={classes.input}
          type="number"
          name="price"
          variant="outlined"
          placeholder="Type a price"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.price}
          error={Boolean(formik.errors.price)}
        />

        <InputLabel htmlFor="my-input">Category</InputLabel>
        <Select
          style={{ width: '80%' }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Categories"
          name="categoryId"
          onChange={formik.handleChange}
          value={formik.values.categoryId}
          error={Boolean(formik.errors.categoryId)}
        >
          <MenuItem value="" disabled>
            <em>Select your category</em>
          </MenuItem>
          {rows.map((element) => {
            return (
              <MenuItem key={element.id} value={element.id}>
                {element.name}
              </MenuItem>
            )
          })}
        </Select>
        <Button variant="outlined" size="large" style={{ marginTop: '20px' }} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}


