import {styled} from "@mui/material";

export const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  background: `linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.primary[200]})`,
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

// export const HeaderWrapper = styled('div')(({ theme }) => ({
//   background: theme.palette.background.paper,
//   paddingTop: 50,
//   paddingLeft: 26,
//   paddingRight: 26,
//   overflowX: 'hidden',
//   overflowY: 'clip',
//   [theme.breakpoints.down('md')]: {
//     paddingTop: 42
//   }
// }));
