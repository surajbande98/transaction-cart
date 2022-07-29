import { Link, Typography } from "@material-ui/core";

export function Footer() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" >
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
           www.google.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}