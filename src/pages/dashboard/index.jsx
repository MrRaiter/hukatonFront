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
import { TabContext } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import ContractPage from '../contract';
import ContractsPage from '../contracts';
import ProfilePage from '../profile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

        <Typography variant="h2">Dashboard</Typography>
        <TabPanel value={value} index={0}>
          <ProfilePage />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ContractsPage />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <ContractPage />
        </TabPanel>
      </Container>
    </TabContext>
  );
};

export default Dashboard;
