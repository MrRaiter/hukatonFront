import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Box, Container, Typography } from '@material-ui/core';
import { contracts } from '../../constants/contracts';
import ContractCard from '../../components/contract-card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ContractsPage = () => (
  <Container maxWidth="lg">
    <Box my={4}>
      <Typography variant="h2">Orders</Typography>
    </Box>
    <Box my={4}>
      <Grid container spacing={4} alignContent="center">
        {contracts.map((contract) => (
          <Grid item xs={4}>
            <ContractCard
              image={contract.image}
              title={contract.title}
              description={contract.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default ContractsPage;
