import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// project import
import useConfig from '../hooks/useConfig';
import Palette from './palette';
import Typography from './typography';

import componentStyleOverrides from './compStyleOverride';
import customShadows from './shadows';

// assets
import colors from '../scss/_themes-vars.module.scss';

export default function ThemeCustomization({ children }) {
  const config = useConfig();
  const { borderRadius, fontFamily, navType, outlinedFilled, presetColor, rtlLayout } = useConfig();

  const theme = useMemo(() => Palette(navType, presetColor), [navType, presetColor]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = useMemo(() => Typography(theme, borderRadius, fontFamily), [theme, borderRadius, fontFamily]);
  const themeCustomShadows = useMemo(() => customShadows(navType, theme), [navType, theme]);

  let color;
  switch (config.presetColor) {
    case 'default':
    default:
      color = colors;
  }

  const themeOption = {
    colors: color,
    heading: '',
    paper: '',
    backgroundDefault: '',
    background: '',
    textPrimary: '',
    textSecondary: '',
    textDisabled: '',
    menuSelected: '',
    menuSelectedBack: '',
    divider: '',
    customization: config
  };

  switch (config.navType) {
    case 'light':
    default:
      themeOption.paper = color.paper;
      themeOption.backgroundDefault = color.default;
      themeOption.background = color.neutral;
      themeOption.textPrimary = color.textPrimary;
      themeOption.textSecondary = color.textSecondary;
      themeOption.textDisabled = color.textDisabled;
      themeOption.menuSelected = color.secondaryDark;
      themeOption.menuSelectedBack = color.secondaryLight;
      themeOption.divider = color.grey200;
      themeOption.heading = color.grey900;
      break;
  }

  const themeOptions = useMemo(
    () => ({
      direction: rtlLayout ? 'rtl' : 'ltr',
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: '48px',
          padding: '16px',
          '@media (min-width: 600px)': {
            minHeight: '48px'
          }
        }
      },
      typography: themeTypography,
      customShadows: themeCustomShadows
    }),
    [rtlLayout, theme, themeCustomShadows, themeTypography]
  );

  const themes = createTheme(themeOptions);
  themes.components = useMemo(() => componentStyleOverrides(themes, borderRadius, outlinedFilled), [themes, borderRadius, outlinedFilled]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node
};
