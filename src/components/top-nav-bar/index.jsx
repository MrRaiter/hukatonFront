import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => (
  <AppBar>
    <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: 50,
          height: 50,
          objectFit: 'contain',
          backgroundImage: 'url("/img/logo-dark.png")',
          position: 'relative',
          backgroundPosition: 'center',
          backgroundRepeat: 'none',
          backgroundSize: 'contain',
        }}
      >
        <img src="/img/logo-dark.png" alt="logo" style={{ display: 'none' }} />
      </div>
    </Toolbar>
  </AppBar>
);

export default NavBar;
