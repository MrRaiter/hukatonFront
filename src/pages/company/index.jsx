import { useState } from 'react';
import { Route, Router, Switch, useRouteMatch } from 'react-router';
import {
  AppBar,
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { TabPanel, TabContext } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import ContractPage from '../contract';
import ContractsPage from '../contracts';
import ProfilePage from '../profile';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CompanyPage = () => {
  const { path, url } = useRouteMatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log('PATH', path, url);
  return (
    <TabContext>
      <Container>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Profile" {...a11yProps(0)} />

            <Tab label="Contracts" {...a11yProps(1)} />

            <Tab label="Orders" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <Typography variant="h2">Company page</Typography>

        <Switch>
          <TabPanel value={value} index={0}>
            <ProfilePage />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <ContractsPage />
          </TabPanel>

          <TabPanel value={value} index={2}>
            <ContractPage />
          </TabPanel>
        </Switch>
      </Container>
    </TabContext>
  );
};

export default CompanyPage;
