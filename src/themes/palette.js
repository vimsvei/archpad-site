// material-ui
import { createTheme } from '@mui/material/styles';

// assets
import defaultColor from '../scss/_themes-vars.module.scss';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (navType, presetColor) => {
  let colors;
  switch (presetColor) {
    case 'default':
    default:
      colors = defaultColor;
  }

  return createTheme({
    palette: {
      mode: navType,
      common: {
        black: colors.darkPaper
      },
      primary: {
        light: colors.primaryLight,
        main: colors.primaryMain,
        dark: colors.primaryDark,
        200: colors.primary200,
        800: colors.primary800
      },
      secondary: {
        light: colors.secondaryLight,
        main: colors.secondaryMain,
        dark: colors.secondaryDark,
        200: colors.secondary200,
        800: colors.secondary800
      },
      error: {
        light: colors.errorLight,
        main: colors.errorMain,
        dark: colors.errorDark
      },
      orange: {
        light: colors.orangeLight,
        main: colors.orangeMain,
        dark: colors.orangeDark
      },
      warning: {
        light: colors.warningLight,
        main: colors.warningMain,
        dark: colors.warningDark
      },
      success: {
        light: colors.successLight,
        200: colors.success200,
        main: colors.successMain,
        dark: colors.successDark
      },
      grey: {
        50: colors.grey50,
        100: colors.grey100,
        500: colors.grey500,
        600: colors.grey600,
        700: colors.grey700,
        900: colors.grey900
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
        dark: colors.grey900,
        hint: colors.grey300,
        disabled: colors.textDisabled
      },
      divider: colors.divider,
      background: {
        paper: colors.paper,
        default: colors.default,
        neutral: colors.neutral
      }
    }
  });
};

export default Palette;
