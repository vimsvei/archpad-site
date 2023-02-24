const Typography = (theme, borderRadius, fontFamily) => ({
  fontFamily,
  h6: {
    fontsize: '1.125rem',
    lineWidth: '28px',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  h5: {
    fontSize: '1.25rem',
    lineWidth: '30px',
    color: theme.palette.text.primary,
    fontWeight: 600
  },
  h4: {
    fontSize: '1.5rem',
    lineWidth: '36px',
    color: theme.palette.text.primary,
    fontWeight: 500
  },
  h3: {
    fontSize: '2.25rem',
    lineHeight: '54px',
    color: theme.palette.text.primary,
    fontWeight: 500
  },
  h2: {
    fontSize: '3rem',
    lineHeight: '64px',
    color: theme.palette.text.primary,
    fontWeight: 500
  },
  h1: {
    fontSize: '4rem',
    lineHeight: '80px',
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '28px',
    color: theme.palette.text.secondary
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: '26px',
    color: theme.palette.text.secondary
  },
  caption: {
    fontSize: '0.8125rem',
    color: theme.palette.text.secondary,
    fontWeight: 400
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 300,
    lineHeight: '28px'
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 300,
    lineHeight: '26px',
    // color: theme.palette.text.primary
  },
  button: {
    textTransform: 'capitalize'
  },
  customInput: {
    marginTop: 1,
    marginBottom: 1,
    '& > label': {
      top: 23,
      left: 0,
      color: theme.palette.grey[500],
      '&[data-shrink="false"]': {
        top: 5
      }
    },
    '& > div > input': {
      padding: '30.5px 14px 11.5px !important'
    },
    '& legend': {
      display: 'none'
    },
    '& fieldset': {
      top: 0
    }
  },
  mainContent: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.primary.light,
    width: '100%',
    minHeight: 'calc(100vh - 88px)',
    flexGrow: 1,
    padding: '20px',
    marginTop: '88px',
    marginRight: '20px',
    borderRadius: `${borderRadius}px`
  },
  menuCaption: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.grey[600],
    padding: '6px',
    textTransform: 'capitalize',
    marginTop: '10px'
  },
  subMenuCaption: {
    fontSize: '0.6875rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    textTransform: 'capitalize'
  },
  commonAvatar: {
    cursor: 'pointer',
    borderRadius: '8px'
  },
  smallAvatar: {
    width: '22px',
    height: '22px',
    fontSize: '1rem'
  },
  mediumAvatar: {
    width: '34px',
    height: '34px',
    fontSize: '1.2rem'
  },
  largeAvatar: {
    width: '44px',
    height: '44px',
    fontSize: '1.5rem'
  }
});

export default Typography;
