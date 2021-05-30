import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => (
  <AppBar>
    <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant="h6">KEKW admin</Typography>
      <div
        style={{
          width: 50,
          height: 50,
          objectFit: 'contain',
          backgroundImage: 'url("/img/logo.png")',
          position: 'relative',
          backgroundPosition: 'center',
          backgroundRepeat: 'none',
          backgroundSize: 'contain',
        }}
      >
        <img src="/img/logo.png" alt="logo" style={{ display: 'none' }} />
      </div>
    </Toolbar>
  </AppBar>
);

export default NavBar;
