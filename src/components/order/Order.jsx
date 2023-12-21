import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, LinearProgress, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import InputMask from 'react-input-mask';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import s from './style.module.css';
import { emptyBasket } from '../../store/slices/basket';
import { useAddNewOrderMutation } from '../../store/api/api';
import BasketList from '../basket/basketList/BasketList';
import getTotalPrice from '../../utils/gettTotalPrice';
import SuccessOrder from './successOrder/SuccessOrder';

function Order() {
  const { basket } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const [addOrder] = useAddNewOrderMutation();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const totalPrice = getTotalPrice(basket);
  // if (basket.length === 0) {
  //   return (
  //     <Box sx={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       flexDirection: 'column',
  //       fontSize: 18,
  //       gap: '30px',
  //       mt: 2,
  //     }}
  //     >
  //       <ProductionQuantityLimitsIcon color="primary" fontSize="large" />
  //       The basket is empty. You should add some dish
  //     </Box>
  //   );
  // }
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: '100px',
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
              handleOpen();
              dispatch(emptyBasket());
              addOrder(values);
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
        <SuccessOrder open={open} handleClose={handleClose} />
      </Box>

    </Box>
  );
}

export default Order;
