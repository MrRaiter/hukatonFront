/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#f5f5f9',
    border: '2px solid #f5f5f9',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `${50}%`,
    left: `${50}%`,
    transform: 'translate(-50%, -50%)',
  },
  input: {
    width: '100%',
    margin: '5px 0',
  },
  submitBtn: {
    width: '100%',
  },
}));

export default function ModalContract({
  handleOpen,
  open,
  headerText,
  inputHandler,
}) {
  const classes = useStyles();
  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">{headerText}</h2>
      <p id="simple-modal-description">
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={classes.input}
          label="Name"
          name="name"
          onChange={inputHandler}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={classes.input}
          label="Type"
          name="type"
          onChange={inputHandler}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={classes.input}
          label="Image URL"
          name="image"
          onChange={inputHandler}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={`${classes.input} ${classes.description}`}
          label="Description"
          name="description"
          multiline
          onChange={inputHandler}
        />
      </p>
      <Button variant="contained" color="primary" className={classes.submitBtn}>
        {headerText}
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleOpen(false)}
        aria-describedby="simple-modal-description"
        className={classes.submitBtn}
      >
        {body}
      </Modal>
    </div>
  );
}
