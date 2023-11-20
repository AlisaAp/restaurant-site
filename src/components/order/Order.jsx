import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, LinearProgress, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import s from './style.module.css';
import { emptyBasket } from '../../store/slices/basket';
import { useAddNewOrderMutation } from '../../store/api/api';

function Order() {
  const { basket } = useSelector((state) => state.basket);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addOrder] = useAddNewOrderMutation();
  return (
    <Box>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          address: '',
          data: basket,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.phone) {
            errors.phone = 'Required';
          } else if (
            !/^\+380\d{9}$/i.test(values.phone)
          ) {
            errors.phone = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            dispatch(emptyBasket());
            enqueueSnackbar('sucsess');
            addOrder(values);
            navigate('/');
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={s.container}>
            <Field
              component={TextField}
              name="name"
              type="text"
              label="name"
            />
            <br />
            <Field
              component={TextField}
              type="phone"
              label="phone"
              name="phone"
            />
            <br />
            <Field
              component={TextField}
              type="text"
              label="address"
              name="address"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Order;
