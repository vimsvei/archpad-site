import React from "react";
import {useScrollTrigger, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const ElevationScroll = ({children, window}) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });
  const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];
  
  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? 'none' : '1px solid',
      borderColor: trigger ? '' : darkBorder,
      color: theme.palette.text.dark
    }
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node,
  window: PropTypes.object
};

export default ElevationScroll;
