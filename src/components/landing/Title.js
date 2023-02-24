import {Box, Button, Container, Grid, Link, Typography, useTheme} from "@mui/material";
import {motion} from "framer-motion";
import {gridSpacing} from "../../constant";
import {TitleImage} from "../images";
import AnimateButton from "../common/AnimateButton";

const Title = ({item}) => {
  const theme = useTheme();
  const { title, subtitle, description, titleImage, buttonCaptionList } = item;
  
  return(
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={gridSpacing}
        sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
      >
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={gridSpacing}
            sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}
          >
            <Grid item xs={12}>
              <Typography variant="h1">
                { title }
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="div"
                color="inherit"
              >
                { subtitle }
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                component="div"
                color="inherit"
              >
                { description }
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: 3.25 }}>
              <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Grid item>
                  <AnimateButton>
                    <Button
                      component={Link}
                      href="/"
                      target="_blank"
                      size="large"
                      variant="contained"
                      color="warning">
                      { buttonCaptionList[0] }
                    </Button>
                  </AnimateButton>
                </Grid>
                <Grid item>
                  <AnimateButton>
                    <Button
                      component={Link}
                      href="/"
                      target="_blank"
                      size="large"
                      variant="contained"
                      color="primary">
                      { buttonCaptionList[1] }
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{ position: 'relative', mt: 8.75 }}>
            <TitleImage src={titleImage.url} alt={titleImage.title}/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Title;
