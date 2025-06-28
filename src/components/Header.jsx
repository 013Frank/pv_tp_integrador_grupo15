import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2', px: 2 }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: isSm ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: isSm ? 1 : 0,
        }}
      >
        {/* Bloque de navegación */}
        <Box
          component="nav"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            alignItems: 'center',
            mb: isSm ? 1 : 0,
          }}
        >
          {user ? (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/"
                startIcon={<ShoppingCartIcon />}
              >
                Inicio
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/favorites"
                startIcon={<FavoriteIcon />}
              >
                Favoritos
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/add"
                startIcon={<AddBoxIcon />}
              >
                Agregar
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                startIcon={<LoginIcon />}
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/register"
                startIcon={<HowToRegIcon />}
              >
                Registro
              </Button>
            </>
          )}
        </Box>

        {/* Bloque de usuario */}
        {user && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mt: isSm ? 1 : 0,
            }}
          >
            <Typography variant="subtitle1" component="span">
              Bienvenido,&nbsp;
              <Typography
                component="span"
                variant="subtitle1"
                sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
              >
                {user.email.split('@')[0]}
              </Typography>
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
