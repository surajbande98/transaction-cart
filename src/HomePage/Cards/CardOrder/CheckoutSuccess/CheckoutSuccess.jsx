import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
      
      <Link to="/banking">Go to Home</Link>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
