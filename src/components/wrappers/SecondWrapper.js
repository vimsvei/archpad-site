import {styled} from "@mui/material";

export const SecondWrapper = styled('div')(({ theme }) => ({
  paddingTop: 160,
  background: `linear-gradient(to bottom left,
    ${theme.palette.primary[200]},
    ${theme.palette.primary.light})`,
  
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

export const SecondWrapper2 = styled('div')(({ theme }) => ({
  paddingTop: 160,
  background: `linear-gradient(to bottom,
    ${theme.palette.primary.light},
    ${theme.palette.secondary.light})`,
  
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));
