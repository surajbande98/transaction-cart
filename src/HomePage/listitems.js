import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import {Link as RouterLink} from 'react-router-dom';

import EmailIcon from "@material-ui/icons/Email";
import PaymentIcon from "@material-ui/icons/Payment";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SettingsIcon from "@material-ui/icons/Settings";
import { Collapse, Divider, List, makeStyles } from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import MoneyIcon from "@material-ui/icons/Money";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

const MENU_ITEMS = [
  {
    id: 1,
    title: "Accounts",
    path: "accounts",
    icon: <DashboardIcon />,
    subItems: null,
    open: false,
  },
  {
    id: 2,
    title: "Payments",
    path: "payments",
    icon: <PaymentIcon />,
    subItems: [
      {
        id: 1,
        title: "Single Payments",
        icon: <MoneyIcon />,
      },
      {
        id: 2,
        title: "All Payments",
        icon: <AccountBalanceWalletIcon />,
      },
    ],
    open: false,
  },
  {
    id: 6,
    title: "Bulk Payments",
    path: "bulkpayments",
    icon: <AccountBalanceIcon />,
    subItems: null,
    open: false,
  },
  {
    id: 11,
    title: "Cards",
    path: "cards",
    icon: <AccountBalanceIcon />,
    subItems: null,
    open: false,
  },
  {
    id: 4,
    title: "Messaging",
    path: "messages",
    icon: <EmailIcon />,
    subItems: [
      {
        id: 1,
        title: "Sent",
      },
      {
        id: 2,
        title: "Received",
      },
    ],
    open: false,
  },
  {
    id: 4,
    title: "Settings",
    path: "settings",
    icon: <SettingsIcon />,
    subItems: null,
    open: false,
  },
  {
    id: 5,
    title: "Users",
    path: "users",
    icon: <PeopleIcon />,
    subItems: null,
    open: false,
  },
];

const useStyles = makeStyles((theme) => ({
  active: {
    color: theme.palette.activeLink.main,
  },

  listIcon: {
    minWidth: theme.spacing.unit * 4,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
}));

const SidebarItems = ({ title, setTitle }) => {
  const classes = useStyles();

  const [sidbrItems, setsidbrItems] = useState(MENU_ITEMS);

  const handleClick = (selTitle) => {
    let originalItems = sidbrItems.map((item) => {
      if (selTitle === item.title) {
        item.open = !item.open;
      } else {
        item.open = false;
      }
      return item;
    });

    setsidbrItems(originalItems);
  };

  return (
    <>
      {sidbrItems.map((item) => (
        <>
          <ListItem
            selected={title === item.title}
            className={title === item.title ? classes.active : ""}
            button
            to={item.path}
            onClick={() => {
              setTitle(item.title);
              handleClick(item.title);
            }}
            component={Link}
          >
            <ListItemIcon
              className={title === item.title ? classes.active : ""}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
            {item.subItems && (item.open ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>

          <Collapse in={item.open} timeout="auto" unmountOnExit>
            <List>
              {item.subItems?.map((sitem) => {
                return (
                  <ListItem key={sitem.id} button className={classes.nested}>
                    <ListItemIcon className={classes.listIcon}>
                      {!sitem?.icon ? <AssignmentIcon /> : sitem.icon}
                    </ListItemIcon>

                    <ListItemText primary={sitem.title} />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </>
      ))}

      <Divider />
      <ListItem button to='/' component={RouterLink}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sign out"/>
      </ListItem>
    </>
  );
};

export default SidebarItems;
