// Create a theme config.
export const theme = {
  palette: {
    primary: {
      main: "#F37E20",
      contrastText: "#fff",
    },
    secondary: {
      main: "#074A86",
    },

    activeLink: {
      main: "#074A86",
    },

    ternary: {
      main: "#CA262C",
    },

    transparent: {
      main: "#fff"
    },
    type: "light"
  },
  typography: {
    fontFamily: "Comic Sans MS",
    body2: {
      fontFamily: "Times New Roman",
      fontSize: "1.1rem",
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  overrides: {
    MuiFilledInput: {
      root: {
        //backgroundColor: "green"
      },
    },
    MuiInputLabel: {
      root: {
        //backgroundColor: "yellow"
      },
    },
    MuiTextField: {
      root: {},
    },
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "12px",
      },
      fullWidth: {}
    },
    MuiAppBar: {
      root: {},
    },
    MuiToolbar: {
      root: {
        color: "#fff",
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {},
      },
    },
    MuiListItemText: {
      root: {},
      primary: {},
    },
    MuiBadge: {
      backgroundColor: "ternary",
    },

    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
    },
    MuiCheckbox: {
      disableRipple: true,
    },
    MuiTextField: {
      variant: "outlined",
      autoComplete: "off",
      // InputLabelProps: {
      //   shrink: true,
      // },
    },

    MuiSelect: {
      variant: "outlined",
    },
    
    MuiPaper: {
      elevation: 4,
    },

    MuiCard: {
      elevation: 4,
    },

    MuiAppBar: {},
    MuiListItem: {
      disableRipple: true,
    },

    MuiIconButton: {
      disableRipple: true,
    },
  },
};