import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Box, Container, Typography } from '@material-ui/core';
import axios from 'axios';
import { contracts } from '../../constants/contracts';
import ContractCard from '../../components/contract-card';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  const getApi = async () => {
    const company = await axios.get(`${process.env.REACT_APP_BACKEND}company`);
    if (company.data) {
      setCompanies(company.data);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h2">Companies</Typography>
      </Box>
      <Box my={4}>
        <Grid container spacing={4} alignContent="center">
          {companies.map((contract) => (
            <Grid item xs={4}>
              <ContractCard
                image={contract.image}
                title={contract.title}
                description={contract.description}
                buttonTitle="Read Full Overview"
                onClick={() => {
                  console.log('Click');
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
export default Companies;
