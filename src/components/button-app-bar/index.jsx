/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
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
            <MenuItem>Contracts</MenuItem>
            <MenuItem>Companies</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter />
    </ProSidebar>
  );
}
