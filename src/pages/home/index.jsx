/* eslint-disable no-unused-vars */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './home.css';
import { Slide, useScrollTrigger } from '@material-ui/core';
import fastImg from '../../assets/images/fast.png';
import simpImg from '../../assets/images/simp.png';
import comfImg from '../../assets/images/comf.png';
import NavBar from '../../components/top-nav-bar';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    marginTop: 80,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [0, 1, 2];
const data = [
  {
    head: 'Быстро',
    img: comfImg,
    description:
      'Система проста, для получения прав доступа вам нужно создать заявку и пройти проверку. После этих шагов вы получите доступ к системе и сможете вести свой бизнес еще продуктивнее',
  },
  {
    head: 'Просто',
    img: simpImg,
    description:
      'Доступ к основным функциям: создание отчетов, отслеживание тендеров, запросы на поставку и продажи. Все в одной системе без необходимости самостоятельного поиска.',
  },
  {
    head: 'Удобно',
    img: fastImg,
    description:
      'Удаленное хранилище данных позволит Вам получить доступ к системе из любой точки планеты. Нет необходимости в специализированных устройствах.',
  },
];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <main>
        {/* Hero unit */}

        <NavBar />

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              KEKW Admin
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Система тендеров, с возможностью отслеживания поставок, контроля
              исполнения заказов и оценки компаний
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link href="/login">
                    <Button variant="contained" color="primary">
                      Launch App
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://github.com/MrRaiter/hukatonFront"
                    target="_blank"
                  >
                    Our GitHub
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item key={0} xs={12} sm={12} md={12}>
              <div className="cardMediaHeight">
                <div className="img-block">
                  <img className="card-img" src={data[0].img} alt="" />
                </div>
                <div className="text-block">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="right"
                  >
                    {data[0].head}
                  </Typography>
                  <Typography align="right" color="textSecondary">
                    {data[0].description}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item key={1} xs={12} sm={12} md={12}>
              <div className="cardMediaHeight">
                <div className="text-block">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="left"
                  >
                    {data[1].head}
                  </Typography>
                  <Typography align="left" color="textSecondary">
                    {data[1].description}
                  </Typography>
                </div>
                <div className="img-block">
                  <img className="card-img" src={data[1].img} alt="" />
                </div>
              </div>
            </Grid>
            <Grid item key={2} xs={12} sm={12} md={12}>
              <div className="cardMediaHeight">
                <div className="img-block">
                  <img className="card-img" src={data[2].img} alt="" />
                </div>
                <div className="text-block">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="right"
                  >
                    {data[2].head}
                  </Typography>
                  <Typography align="right" color="textSecondary">
                    {data[2].description}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
