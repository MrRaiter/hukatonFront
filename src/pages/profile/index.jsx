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
import IconButton from '@material-ui/core/IconButton';
import { Box, Container, Typography } from '@material-ui/core';
import ModalContract from '../../components/modal-contract';
import './profile.scss';

const useStyles = makeStyles({
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
    marginBottom: '5px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'flex-start',
  },
  value: {
    marginLeft: '10px',
  },
});

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contract, setContract] = useState({});
  const [company, setCompany] = useState(null);

  const handleChangeContract = (e) => {
    setContract({ ...contract, [e.target.name]: e.target.value });
  };
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
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
    </Container>
    // <div className="container">
    //   <div className="header">
    //     <div className="left-block">
    //       <div className="company-name-header">
    //         <div className="company-name">
    //           <div className="logo">
    //             <img
    //               src="http://www.gidrolast.ru/wp-content/uploads/2015/09/4-150x150.jpg"
    //               alt="Logo"
    //             />
    //           </div>
    //           <div className="name">TMK</div>
    //         </div>
    //       </div>
    //       <div className="info">
    //         <div className="info-field">
    //           <div className="label">Phone:</div>
    //           <div className="value">545659956565</div>
    //         </div>
    //         <div className="info-field">
    //           <div className="label">Email:</div>
    //           <div className="value">545659956565</div>
    //         </div>
    //         <div className="info-field">
    //           <div className="label">INN:</div>
    //           <div className="value">545659956565</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="right-block">
    //       <div className="add-btn">
    //         <button className="btn" onClick={() => setIsModalOpen(true)}>
    //           Add Contract
    //         </button>
    //       </div>
    //       <div className="description">
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry&apos;s standard dummy
    //         text ever since the 1500s, when an unknown printer took a galley of
    //         type and scrambled it to make a type specimen book. It has survived
    //         not only five centuries, but also the leap into electronic
    //         typesetting, remaining essentially unchanged. It was popularised in
    //         the 1960s with the release of Letraset sheets containing Lorem Ipsum
    //         passages, and more recently with desktop publishing software like
    //         Aldus PageMaker including versions of Lorem Ipsum.
    //       </div>
    //     </div>
    //   </div>
    //   <ModalContract
    //     handleOpen={setIsModalOpen}
    //     open={isModalOpen}
    //     headerText="Add contract"
    //     inputHandler={handleChangeContract}
    //   />
    // </div>
  );
};

export default ProfilePage;
