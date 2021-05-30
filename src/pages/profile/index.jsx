/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { useParams } from 'react-router';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import {
  Box, Container, Typography,
  Avatar,
  Chip,
  Divider,
  Grid,
  Paper,
} from '@material-ui/core';
import { contracts } from '../../constants/contracts';
import ModalContract from '../../components/modal-contract';

import styles from './Profile.module.scss';
import ContractCard from '../../components/contract-card';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: 140,
  },
  card: {
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
    width: '60vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  companyTitle: {
    fontSize: 20,
    margin: 0,
  },
  field: {
    fontSize: '14px',
    padding: '0px 10px',
    display: 'flex',
    alignItems: 'center',
  },
  value: {
    marginLeft: '10px',
  },
  mainFeaturedPost: {
    minHeight: 350,
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.35)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const ProfilePage = ({ history }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [company, setCompany] = useState(null);
  const { id } = useParams();

  const classes = useStyles();

  const handleClick = (contractId) => {
    history.push(`/orders/${contractId}`);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${company?.image || 'https://cdn.hevcars.com.ua/wp-content/uploads/2017/05/tesla-model-s-2017-banner-hevcars-04.jpg'})` }}
      >
        {/* Increase the priority of the hero background image */}
        <img
          style={{ display: 'none' }}
          src={company?.image}
          alt={company?.imageText}
        />
        <div className={classes.overlay} />
      </Paper>
      <Container maxWidth="md">
        <section>
          <div className={styles.TopBanner}>
            <div className={styles.Content}>
              <div className={styles.TopInfo}>
                {/* <Link href={`/companies/${order.publisher.id}`}> */}
                <div className={styles.CompanyCard}>
                  <Avatar variant="square" src={company?.logo || 'https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png'} />
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    className={styles.CompanyName}
                  >
                    {company?.name || 'Tesla Inc'}
                  </Typography>
                </div>
                <div>
                  <div className={styles.Stars}>
                    <StarIcon className={styles['Star--active']} />
                    <StarIcon className={styles['Star--active']} />
                    <StarIcon className={styles['Star--active']} />
                    <StarIcon className={styles['Star--active']} />
                    <StarIcon />
                  </div>
                  <Typography align="right" variant="body1" color="textSecondary">1295 reviews</Typography>
                </div>
                {/* </Link> */}
              </div>
              <Paper style={{ padding: 10, marginTop: 20, marginBottom: 60 }}>
                <div className={classes.field}>
                  <Typography className={classes.title} color="textSecondary">
                    INN:
                  </Typography>
                  <Typography variant="body2" className={classes.value} component="p">
                    {company?.inn || '233232'}
                  </Typography>
                </div>
                <div className={classes.field}>
                  <Typography className={classes.title} color="textSecondary">
                    Phone:
                  </Typography>
                  <Typography variant="body2" className={classes.value} component="p">
                    {company?.phone || '12312'}
                  </Typography>
                </div>
                <div className={classes.field}>
                  <Typography className={classes.title} color="textSecondary">
                    Email:
                  </Typography>
                  <Typography variant="body2" className={classes.value} component="p">
                    {company?.email || 'qweqwe@gmail.com'}
                  </Typography>
                </div>
              </Paper>

              <Typography
                className={styles.Description}
                variant="body1"
                align="justify"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {company?.description || '    Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla`s current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, as well as other related products and services. In 2020, Tesla had the highest sales in the plug-in and battery electric passenger car segments, capturing 16% of the plug-in market (which includes plug-in hybrids) and 23% of the battery-electric (purely electric) market. Through its subsidiary Tesla Energy, the company develops and is a major installer of solar photovoltaic energy generation systems in the United States. Tesla Energy is also one of the largest global suppliers of battery energy storage systems, with 3 GWh of battery storage supplied in 2020.'}
              </Typography>
              <Divider style={{ marginTop: 30 }} />
              <Box my={8}>
                <Typography variant="h5" style={{ marginBottom: 20 }}>Top contracts by revenue</Typography>
                <Grid container spacing={4} alignContent="center">
                  {contracts.slice(0, 3).map((contract) => (
                    <Grid item xs={4}>
                      <ContractCard
                        image={contract.image}
                        title={contract.title}
                        description={contract.description}
                        buttonTitle="Read Full Overview"
                        onClick={() => handleClick(contract.id)}
                        style={{ height: '100%' }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </div>
        </section>
      </Container>

    </div>
  );
};

export default ProfilePage;

{ /* <Container className={classes.root} maxWidth="lg">
        <Card className={classes.card} variant="outlined">
          <CardMedia
            className={classes.media}
            image={company?.image || 'https://onminecraft.ru/files/2012/03/iron-ingot.png'}
            title="Contract Image"
          />
          <CardContent>
            <div className={classes.header}>
              <Typography className={classes.companyTitle} gutterBottom>
                {company?.title || 'Title'}
              </Typography>
              <Tooltip title="Add Contract">
                <IconButton>
                  <AddCircleOutlineIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className={classes.field}>
              <Typography className={classes.title} color="textSecondary">
                INN:
              </Typography>
              <Typography variant="body2" className={classes.value} component="p">
                {company?.inn || '233232'}
              </Typography>
            </div>
            <div className={classes.field}>
              <Typography className={classes.title} color="textSecondary">
                Phone:
              </Typography>
              <Typography variant="body2" className={classes.value} component="p">
                {company?.phone || '12312'}
              </Typography>
            </div>
            <div className={classes.field}>
              <Typography className={classes.title} color="textSecondary">
                Email:
              </Typography>
              <Typography variant="body2" className={classes.value} component="p">
                {company?.email || 'qweqwe@gmail.com'}
              </Typography>
            </div>
            <div className={classes.field}>
              <Typography className={classes.title} color="textSecondary">
                Description:
              </Typography>
              <Typography variant="body2" className={classes.value} component="p">
                {company?.description || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,'}
              </Typography>
            </div>
          </CardContent>
        </Card>
        <ModalContract
          handleOpen={setIsModalOpen}
          open={isModalOpen}
          headerText="Add contract"
          inputHandler={handleChangeContract}
        />
      </Container>
     */ }
