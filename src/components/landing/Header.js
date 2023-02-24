import ElevationScroll from "../common/ElevationScroll";
import {useState} from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link, List, ListItemButton, ListItemIcon, ListItemText,
  Stack,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';

const ButtonLink1 = ({item}) => {
  const { color, title, slug } = item;
  return(
    <Button
      color={ color }
      component={Link}
      href={slug}
      target="_blank"
    >
      <Typography
        variant="subtitle1"
        component="div"
        color={ color }
      >
        { title }
      </Typography>
    </Button>
  )
}

const ButtonLink2 = ({item}) => {
  const { color, title, slug } = item;
  return(
    <Button
      color={ color }
      component={Link}
      href={slug}
      target="_blank"
      disableElevation
      variant="contained"
    >
      { title }
    </Button>
  )
}


const Header = ({item, ...others}) => {
  const { logo, pagesCollection } = item;
  const { items } = pagesCollection;
  
  const theme = useTheme();
  const [drawerToggle, setDrawerToggle] = useState(false);
  
  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };
  
  return(
    <ElevationScroll {...others}>
      <AppBar>
        <Container>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              <Image
                src={logo.url}
                alt={logo.title}
                width={128}
                height={64}
              />
            </Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
              {
                items.map(page => {
                  const { color, sys } = page;
                  const { id } = sys;
                  return (
                    <>
                      {
                        color === 'inherit'
                          ? <ButtonLink1 key={id} item={page}/>
                          : <ButtonLink2 key={id} item={page}/>
                      }
                    </>
                  )
                })
              }
            </Stack>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                { drawerToggle && (
                  <Box
                    sx={{ width: 'auto' }}
                    role="presentation"
                    onClick={drawerToggler(false)}
                    onKeyDown={drawerToggler(false)}
                  >
                    <List>
                      <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                          
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Box>
                )}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
