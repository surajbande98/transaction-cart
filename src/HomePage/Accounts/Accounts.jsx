import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../common/Title";
import {
  Backdrop,
  CircularProgress,
  Grid,
  Paper,
  withStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { AccountAction } from "../../_actions";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  root: {},
  depositContext: {
    padding: "12px 24px",
    marginBottom: "16px",
  },
  viewLat: {
    color: "green",
    fontWeight: 500,
    textDecoration: "underline",
  },
  accountSumm: {
    marginTop: "1em",
  },
});

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function Accounts() {
  const classes = useStyles();

  const [openBackdrop, setopenBackdrop] = useState(false);

  const dispatch = useDispatch();

  // Subcribe to state
  const {
    AccountReducer: { loading, accounts: allAccounts },
  } = useSelector((state) => {
    return state;
  });

  // Dispatch action
  const fetchAccounts = () => {
    setopenBackdrop(true);
    dispatch(AccountAction.getAll());
  };

  // Fetch accounts
  useEffect(() => {
    fetchAccounts();
    //return () => {};
  }, []);

  function getList() {
    return allAccounts.map((account) => (
      <Grid item xs={12} key={account.id} className={classes.root}>
        <Paper className={classes.depositContext}>
          <React.Fragment>
            <Title>{account.holder}</Title>
            <Typography component="p" variant="h4">
              ${account.balance}
            </Typography>

            <Typography color="textSecondary">on {account.date}</Typography>

            <Accordion className={classes.accountSumm}>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography className={classes.viewLat}>View latest</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        </Paper>
      </Grid>
    ));
  }

  return loading ? (
    <Backdrop open={openBackdrop}>
      <CircularProgress
        thickness={3}
        size={80}
        style={{ color: "rgb(236 237 243)" }}
      />
    </Backdrop>
  ) : (
    getList()
  );
}
