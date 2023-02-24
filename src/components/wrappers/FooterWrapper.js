import {styled} from "@mui/material";

export const FooterWrapper = styled('div')(({ theme }) => ({
  padding: '100px 0px 50px 0',
  color: '#fff',
  background: theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

export const FooterSubWrapper = styled('div')(({ theme }) => ({
  padding: '20px 0',
  color: '#fff',
  background: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));
