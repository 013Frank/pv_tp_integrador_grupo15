import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/favorites">
          Favoritos
        </Button>
        <Button color="inherit" component={Link} to="/add">
          Agregar Producto
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;