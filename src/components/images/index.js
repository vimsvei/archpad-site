import {styled} from "@mui/material";

export const TitleImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: '20px',
  transform: 'scale(1.15)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(1.2)'
  }
}));

export const FeatureImage = styled('img')(({ theme }) => ({
  maxWidth: '75%',
  borderRadius: '20px',
  transform: 'scale(1.25)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(1.2)'
  }
}));

export const ErrorImage = styled('img')(({ theme }) => ({
  maxWidth: '50%',
  borderRadius: '20px',
  transform: 'scale(1)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(1)'
  }
}));
