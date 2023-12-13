import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, LinearProgress, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import InputMask from 'react-input-mask';
import s from './style.module.css';
import { emptyBasket } from '../../store/slices/basket';
import { useAddNewOrderMutation } from '../../store/api/api';
import BasketList from '../basket/basketList/BasketList';
import getTotalPrice from '../../utils/gettTotalPrice';

function Order() {
  const { basket } = useSelector((state) => state.basket);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addOrder] = useAddNewOrderMutation();

  const totalPrice = getTotalPrice(basket);
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, gap: '100px',
    }}
    >
      <Box>
        <BasketList />
      </Box>
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
              errors.phone = 'Invalid phone number';
            }
            if (!values.address) errors.address = 'Required';
            if (!values.name) errors.name = 'Required';
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
          {({
            submitForm, isSubmitting, handleChange, values,
          }) => (
            <Form className={s.container}>

              <Field
                component={TextField}
                name="name"
                type="text"
                label="name"
              />
              <br />
              <InputMask
                mask="+380999999999"
                onChange={handleChange}
                value={values.phone}
              >
                {() => (
                  <Field
                    component={TextField}
                    type="text"
                    label="phone number"
                    name="phone"
                    fullWidth
                    variant="outlined"
                  />
                )}
              </InputMask>
              <br />
              <Field
                component={TextField}
                type="text"
                label="address"
                name="address"
              />
              {isSubmitting && <LinearProgress />}
              <br />
              {totalPrice}
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                sx={{ mt: '10px' }}
              >
                MAKE AN ORDER
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Order;
