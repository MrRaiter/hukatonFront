import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import './footer.css';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography
      style={{ color: 'white' }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        KEKW Admin
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer className={`${classes.footer} my-footer`}>
        <Typography
          style={{ color: 'white' }}
          variant="h6"
          align="center"
          gutterBottom
        >
          Hackatone Project
        </Typography>
        <Typography
          style={{ color: 'white' }}
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Все права защищены, Таганрог 2021
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}
