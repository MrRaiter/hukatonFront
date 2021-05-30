/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import { Select } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export default function ButtonAppBar() {
  return (
    <ProSidebar>
      <SidebarHeader />
      <SidebarContent>
        <Menu iconShape="square">
          <SubMenu title="Dashboard" icon={<DashboardIcon />}>
            <MenuItem>
              Company
              <Link to="/dashboard" />
            </MenuItem>
            <MenuItem>
              My contracts
              <Link to="/dashboard/contracts" />
            </MenuItem>
            <MenuItem>
              Orders
              <Link to="/dashboard" />
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="square">
          <SubMenu title="Browse" icon={<SearchIcon />}>
            <MenuItem>
              Contracts
              <Link to="/contracts" />
            </MenuItem>
            <MenuItem>
              Companies
              <Link to="/companies" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter />
    </ProSidebar>
  );
}
