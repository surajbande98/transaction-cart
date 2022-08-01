import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { InputField } from "../../components/FormFields";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const addFormFields = {
  bank: {
    name: "bank",
    label: "Bank name*",
    requiredErrorMsg: "Bank name is required",
  },
  accountName: {
    name: "accountName",
    label: "Account name*",
    requiredErrorMsg: "Account name is required",
  },

  accountNumber: {
    name: "accountNumber",
    label: "Account number*",
    requiredErrorMsg: "Account number is required",
  },

  accountNumberConfirm: {
    name: "accountNumberConfirm",
    label: "Re-enter Account number*",
    requiredErrorMsg: "Please enter same number as account number",
  },
};

const InitialValues = {
  accountName: "",
  bank: "",
  accountNumber: "",
  accountNumberConfirm: "",
};

const valSchema = Yup.object().shape({
  accountNumber: Yup.string()
    .required(`${addFormFields.accountNumber.requiredErrorMsg}`)
    .max(12)
    .min(12),
  bank: Yup.string().required(`${addFormFields.bank.requiredErrorMsg}`),
  accountName: Yup.string().required(
    `${addFormFields.accountName.requiredErrorMsg}`
  ),
  accountNumberConfirm: Yup.string()
    .required(`${addFormFields.accountNumberConfirm.requiredErrorMsg}`)
    .max(12)
    .min(12)
    .oneOf([Yup.ref("accountNumber"), null], "Passwords must match"),
});

function _sleep(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), ms);
  });
}

export default function AddPayee() {
  const classes = useStyles();
  const navigate = useNavigate();

  const { accountName, bank, accountNumber, accountNumberConfirm } =
    addFormFields;

  async function _handleSubmit(values, actions) {
   
      await _sleep(2000);
      //alert(JSON.stringify(values, null, 2));
  
      actions.setSubmitting(false);

      navigate("/finance");

  }

  return (
    <React.Fragment>
      <Formik
        initialValues={InitialValues}
        validationSchema={valSchema}
        onSubmit={_handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={classes.w100}>
            <Typography variant="h6" gutterBottom>
              Payment method
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputField
                  name={accountName.name}
                  label={accountName.label}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputField name={bank.name} label={bank.label} fullWidth />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputField
                  name={accountNumber.name}
                  label={accountNumber.label}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputField
                  name={accountNumberConfirm.name}
                  label={accountNumberConfirm.label}
                  fullWidth
                />
              </Grid>

              <Grid item sm={2}>
                <Button
                  fullWidth
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Continue
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}
